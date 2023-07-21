#!/usr/bin/python3

# Utility for modifying db.json
# Can be used to update existing records, & add new ones, from a file or folder

import os
import time
import json
import shutil
import zipfile
import argparse
from pathlib import Path

import utils

def write_db(path, db):
    if os.path.exists(path) and os.path.isdir(path):
        raise IsADirectoryError(path)

    with open(path, "w") as f:
        f.write(json.dumps(db, indent=4))


def load_db(path):
    if os.path.exists(path):
        if os.path.isfile(path):
            with open(path, "r") as f:
                return json.load(f)
        else:
            raise IsADirectoryError(path)
    else:
        print(path, "does not exist yet")
        return {
            "meta": {
                "format_version": 1,
            },
            "entries": [],
        }


def zipto(target, dst):
    print("Compressing", target, "to", dst)
    if os.path.isfile(dst):
        print("Destination file already exists! Deleting old version...")
        os.remove(dst)
    with zipfile.ZipFile(
        dst, mode="w", compression=zipfile.ZIP_DEFLATED, compresslevel=9
    ) as archive:
        for file_path in Path(target).rglob("*"):
            archive.write(file_path, arcname=file_path.relative_to(target))


def find_entry(db, name):
    # Find index of name in db
    for idx, data in enumerate(db["entries"]):
        if data["name"] == name:
            return idx
    return -1




def format_entry(
    name,
    author="",
    client="",
    download="",
    version=0,
    updated=round(time.time()),
    source="",
    description="",
    inherits="",
    md5="",
):
    return {
        "name": name,
        "author": author,
        "client": client,
        "download": download,
        "inherits": inherits,
        "version": version,
        "updated": updated,
        "source": source,
        "description": description,
        "md5": md5,
    }


def parse(args_in):
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--database", "-db", type=Path, default=Path("./db.json"), help="Database file"
    )
    parser.add_argument(
        "--noinput",
        help="Assume defaults for all queries requiring user input, such as author names.",
    )
    parser.add_argument(
        "--host",
        type=str,
        default="https://raw.githubusercontent.com/mocchapi/pesterchum-themes/main/themes/",
        help="Default download host",
    )
    parser.add_argument(
        "--destination", type=Path, default=Path("./themes/"), help="Generated downloads destination folder"
    )

    sub_parsers = parser.add_subparsers(dest="command", required=True)

    ingest_parser = sub_parsers.add_parser(
        "ingest", help="Update or add an entry from a file or folder"
    )  # Add / update item from a file or folder
    ingest_parser.add_argument("target", type=Path, help="File or folder to ingest")
    ingest_parser.add_argument(
        "--author", type=str, default=None, help="Override author value"
    )
    ingest_parser.add_argument(
        "--name", type=str, default=None, help="Override theme name"
    )
    ingest_parser.add_argument(
        "--client",
        choices=["pesterchum", "godot"],
        default=None,
        help="Override client type",
    )
    ingest_parser.add_argument(
        "--version", type=int, default=None, help="Override version number"
    )
    ingest_parser.add_argument(
        "--inherits", type=str, default=None, help="Override inherited theme name"
    )

    ingest_parser.add_argument(
        "--source", type=str, default=None, help="Override url to source code"
    )
    ingest_parser.add_argument(
        "--description", type=str, default=None, help="Override description"
    )
    ingest_parser.add_argument(
        "--updated", type=int, default=None, help="Override last updated timestamp"
    )

    search_parser = sub_parsers.add_parser("search", help="Search & list entries in the database")
    search_parser.add_argument("--client", type=str, default=None, help="Limit to client type")
    search_parser.add_argument("--after", type=int, default=None, help="Limit entries updated after timestamp")
    search_parser.add_argument("--before", type=int, default=None, help="Limit entries updated before timestamp")
    search_parser.add_argument("--inherits", type=str, default=None, help="Limit entries to those that inherit from the given theme")

    search_parser.add_argument("--name-search", action=argparse.BooleanOptionalAction, default=True, help="Include name field in search")
    search_parser.add_argument("--author-search", action=argparse.BooleanOptionalAction, default=True, help="Include author field in search")
    search_parser.add_argument("--description-search", action=argparse.BooleanOptionalAction, default=True, help="Include author field in search")
    search_parser.add_argument("--search-case", action='store_true', default=False, help="Make searches case-sensitive")

    search_parser.add_argument('--only-list', '-ol', action='append', help="Only print the given keys. incompatible with --dont-list")
    search_parser.add_argument('--dont-list', '-dl', action='append', help="Print all keys except the given. incompatible with --only-list")

    search_parser.add_argument("search", nargs='?', type=str, default=None, help="Search term")
    
    add_parser = sub_parsers.add_parser("edit") # Manually edit theme
    add_parser.add_argument("theme",type=str, help="Name of theme in the database")

    delete_parser = sub_parsers.add_parser("delete") # Delete item
    delete_parser


    return parser.parse_args(args_in)



def handle_search(db, args):
    search_results = []
    for idx, entry in enumerate(db['entries']):
        if args.client != None and args.client != entry['client']:
            continue
        if args.inherits != None:
            if not utils.simple_fuzzy_match(args.inherits, entry['inherits']): continue
        if args.after != None and entry['updated'] <= args.after:
            continue
        if args.before != None and args.before <= entry['updated']:
            continue
        if args.search != None:
            search_ok = False
            searchables = []
            if args.name_search:
                searchables.append('name')
            if args.author_search:
                searchables.append('author')
            if args.description_search:
                searchables.append('description')
            for field in searchables:
                if args.search_case:
                    if args.search in entry[field]:
                        search_ok = True
                        break
                else:
                    if args.search.lower() in entry[field].lower():
                        search_ok = True
                        break
            if not search_ok:
                continue
        search_results.append(idx)
    
    prints = []
    for index in search_results:
        out = []
        entry = db['entries'][index]
        listables = list(entry.keys())
        if args.only_list != None:
            listables = [x for x in listables if x in args.only_list]
        elif args.dont_list != None:
            listables = [x for x in listables if not x in args.dont_list]
        listables.sort(key=len)
        if len(listables) > 0:
            longest_key = len(sorted(listables, key=len)[-1])
        for key in listables:
            shown_key = ("{0:<" + str(longest_key+2) + "}").format(key+':')
            shown_value = entry[key]
            if type(shown_value) == str: 
                if shown_value == '':
                    shown_value = '<empty>'
                shown_value = shown_value.replace('\n', '\\n')
            out.append("\n   " + f'{shown_key} {shown_value}')
        prints.append(f'# {index}' + ''.join(out))
    if prints:
        print('\n'.join(prints))



def handle_ingest(db, args):
    if not args.target.exists():
        raise FileNotFoundError()

    print("Ingesting",args.target)
    if args.client == None:
        if args.target.suffix == '.tres':
            args.client = 'godot'
        if args.target.is_dir() or args.target.suffix == ".zip":
            args.client = "pesterchum"
        else:
            raise Exception("Client type not recognised")
    print(" It is compatible with the",args.client,'client')

    client_pesterchum_style = {}
    if args.client == 'pesterchum':
        with open(os.path.join(args.target, 'style.js')) as f:
            client_pesterchum_style = json.load(f)

    if args.name == None:
        if args.target.suffix == ".zip":
            args.name = args.target.stem
        else:
            args.name = args.target.name

    idx = find_entry(db, args.name)
    has_entry = idx >= 0

    if has_entry:
        print(f' Entry "{args.name}" exists (#{idx})')
    else:
        print(f' No entry for theme "{args.name}" exists yet')

    if args.version == None:
        if has_entry:
            args.version = db["entries"][idx]["version"] + 1
            print("  Version increased to", args.version)
        else:
            args.version = 0
    else:
        print("  Version is forced to:",args.version)

    if args.description == None:
        if has_entry:
            args.description = db["entries"][idx]["description"]
        else:
            args.description = utils.query("Description", "", args.noinput)
    else:
        print("  Description is forced to:",args.description.replace('\n','\\n'))

    if args.source == None:
        if has_entry:
            args.source = db["entries"][idx]["source"]
        else:
            args.source = "https://github.com/mocchapi/pesterchum-themes"
    else:
        print("  Source is forced to:",args.source)

    if args.author == None:
        if has_entry:
            args.author = db["entries"][idx]["author"]
        else:
            args.author = utils.query("Author name", "unknown", args.noinput)
    else:
        print("  Author is forced to:",args.author)

    if args.updated == None:
        args.updated = round(utils.get_modify_time(args.target))
        if args.updated == -1:
            args.updated = round(time.time())
    else:
        print("  Updated is forced to:",args.updated,'('+utils.timestamp_to_human(args.updated)+')')

    if args.inherits == None:
        # TODO: extract this from style.json
        if args.client == "pesterchum":
            args.inherits = client_pesterchum_style.get('main',{}).get('inherits','')
        elif has_entry:
            args.inherits = db["entries"][idx]["inherits"]
        else:
            args.inherits = utils.query("Does this theme use `inherits`? if yes enter the name of the theme now. if not, press enter.", "", args.noinput)
    else:
        print('  Inherits forced to:',args.inherits)

    dst = str(args.destination) + "/" + args.client + "/" + args.name
    download_name = ""
    match args.client:
        case "pesterchum":
            download_name = args.host + args.client + "/" + args.name + ".zip"
        case "godot":
            print("Godot not yet supported")
            return
    
    print("  Download URL will be:",download_name)

    data = format_entry(
        args.name,
        author=args.author,
        client=args.client,
        download=download_name,
        version=args.version,
        source=args.source,
        description=args.description,
        inherits=args.inherits,
        updated=args.updated,
        md5 = utils.md5_dir(args.target),
    )


    print()
    if has_entry:
        print("Summary of changes:")
        for key in data.keys():
            if db['entries'][idx].get(key) != data[key]:
                before_show = str(db['entries'][idx].get(key, '<Didnt exist>'))
                after_show = str(data[key])
                if key == 'updated':
                    before_show += ' (' + utils.timestamp_to_human(db['entries'][idx].get(key, 0)) + ')'
                    after_show += ' (' + utils.timestamp_to_human(data[key]) + ')'
                print(f"{key:>15}: {before_show:>30} -> {after_show}")
        print()
        if not utils.yesno('Update theme?', True, args.noinput):
            print("Changes aborted!")
            return
        db["entries"][idx] = data
    else:
        print("Summary of addition:")
        for key in data.keys():
            value_show = str(data[key])
            if key == "updated":
                value_show += ' (' + utils.timestamp_to_human(data[key]) + ')'
            print(f"{key:>15}: {data[key]}")
        print()
        if not utils.yesno('Add theme?', True, args.noinput):
            print("Changes aborted!")
            return
        db["entries"].append(data)

    match args.client:
        case "pesterchum":
            if args.target.suffix == ".zip":
                try:
                    shutil.copyfile(args.target, dst)
                except shutil.SameFileError as e:
                    print("File already in correct location")
            elif args.target.is_dir:
                zipto(args.target, dst + ".zip")
            else:
                raise Exception(
                    f"Error ingesting {dst}: Pesterchum themes must be a folder or a .zip file"
                )

    print("Saving to", args.database)
    write_db(args.database, db)
    print("All done!")
    print()
    print("You can now make a commit <3")


def main(args):
    db = load_db(args.database)

    match args.command:
        case "ingest":
            handle_ingest(db, args)
        case "search":
            handle_search(db, args)
        case _:
            print("Uknown command", args.command)


if __name__ == "__main__":
    import sys

    main(parse(sys.argv[1:]))
