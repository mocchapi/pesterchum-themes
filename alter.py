#!/usr/bin/python3

# Utility for modifying db.json
# Can be used to update existing records, & add new ones, from a file or folder

import os
import re
import time
import json
import shutil
import zipfile
import argparse
from pathlib import Path

import utils
import hasher

_re_comments = re.compile(r'(?:[^\".*\:.*\".*\"]|^)\/\/.*\n')

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
    sha256_download="<to be computed after write>",
    sha256_install="",
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
        "sha256_download": sha256_download,
        "sha256_install": sha256_install,
    }


def parse(args_in):
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--database", "-db", type=Path, default=Path("./db.json"), help="Database file"
    )
    parser.add_argument(
        "--noinput",
        help="Assume defaults for all queries requiring user input, such as y/n prompts.",
        action="store_true"
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
    ingest_parser.add_argument('--no-version-increase','-nvi', action='store_true', default=False, help="Skips increasing version number. Make sure you know what you're doing")
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
    ingest_parser.add_argument(
        '--integrity-file', type=Path, default=Path('integrity.txt', help="Path where the download integrity file is written to")
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
    
    # add_parser = sub_parsers.add_parser("edit") # Manually edit theme
    # add_parser.add_argument("theme",type=str, help="Name of theme in the database")

    # delete_parser = sub_parsers.add_parser("delete") # Delete item
    # delete_parser
    
    stats_parser = sub_parsers.add_parser("stats") # Fun statistics
    stats_parser.add_argument('views', choices=[
        'dependencies',
        'history',
        'authors',
    ])
    # oldest theme, newest theme, average publish date, author theme count ranking, tree of dependencies, most updates, largest & smallest file size

    validate_parser = sub_parsers.add_parser("validate", help="Validate databse & its entries to be compliant with the format")
    validate_parser.add_argument("formatfile", default=Path("./format.json"), type=Path, nargs='?')
    validate_parser.add_argument("--fix", default=None, type=bool, action=argparse.BooleanOptionalAction)
    validate_parser.add_argument(
        '--integrity-file', type=Path, default=Path('integrity.txt', help="Path where the download integrity file is written to")
    )

    return parser.parse_args(args_in)

def handle_validate(db, args):
    print("Validating database",args.database,'with format file',args.formatfile)
    with open(args.formatfile, 'r') as f:
        text = f.read()
    text = _re_comments.sub('\n', text)
    fdict = json.loads(text)

    errored_entries = set()
    errored_else = set()
    # format dict
    def recurse(db_item, format_item, path=""):
        errors = 0
        for key in set(list(format_item.keys())+list(db_item.keys())):
            c_path = path+'/'+key
            in_dbitem = key in db_item
            in_fitem = key in format_item
            friendly_name = f'{c_path} ' + (db_item["name"] if 'name' in db_item else '')
            friendly_name = f'{friendly_name:<45}'
            t_dbitem = type(db_item.get(key))
            t_fitem = type(format_item.get(key))
            did_error = True
            if in_dbitem and not in_fitem:
                print(friendly_name,f"Has illegal key   {key:^10} of type {t_dbitem}")
            elif in_fitem and not in_dbitem:
                print(friendly_name,f"Is missing required key {key:^10} of type {t_fitem}")
            elif t_dbitem != t_fitem:
                print(friendly_name+':','type mismatch. format expects',t_dbitem,'but db has',t_fitem)
                print(" "*len(friendly_name),"Values:",db_item[key],'vs',format_item[key])
            else:
                did_error = False  

            if did_error:
                errors += 1
                if path.startswith('/entries/'):
                    errored_entries.add(db['entries'].index(db_item))
                else:
                    errored_else.add(c_path)

            if t_dbitem == list:
                for index,arrayitem in enumerate(db_item[key]):
                    # TODO does not account for nested arrays
                    # The database doesnt have those. i hope it never will
                    errors += recurse(arrayitem, format_item[key][0], c_path+'/['+str(index)+']')
            elif t_dbitem == dict:
                errors += recurse(db_item[key], format_item[key], c_path)
        return errors
    errors = recurse(db, fdict)
    if errors == 0:
        print("Passed with no faults")
        if args.fix:
            print("No fixes required! exiting now.")
        return
    print()
    print(f"Database {args.database} had {errors} faults according to format file {args.formatfile}")
    print(f"  in {len(errored_entries)} entries and {len(errored_else)} other keys")
    print()
    if len(errored_entries) > 0 and args.fix != False:
        print("Would you like to re-ingest the following entries?")
        if len(errored_else) > 0:
            print("/!\ Note: problems were found in the following non-entry keys: ",errored_else)
            print("/!\ re-ingesting will not fix all problems and may worsen faults in this case")
            print("/!\ it is advised to determine all problems before proceeding")
        print('\n'.join([f'   #{x} '+db['entries'][x]['name'] for x in errored_entries]))
        if not utils.yesno("Re-ingest (keep versions)", args.fix == True, args.noinput):
            print("Not fixing. byee")
            return
        print()
        for index in errored_entries:
            re_ingest(db, index, noinput=args.noinput, integrity_file=args.integrity_file)
            
            print()
        print()
        print()
        print("all entries re-ingested. gootbye")
        return


def re_ingest(db, index, noinput=False, integrity_file=None, source_path=None):
    entry = db['entries'][index]
    name = entry['name']
    print(f"Re-ingesting #{index} {name}")
    if source_path == None:
        source_path = './sources/'+name
    if integrity_file == None:
        integrity_file = 'integrity.txt'
    text_args = ['ingest',source_path, '--no-version-increase','--updated',str(entry['updated']),'--integrity-file',str(integrity_file)]
    print('  ','with arguments:',text_args)
    if noinput:
        text_args.insert(0, '--noinput')
    args = parse(text_args)
    handle_ingest(db, args)

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
        with open(os.path.join(args.target, 'style.js'), 'r') as f:
            client_pesterchum_style = json.load(f)

    if args.name == None:
        if args.target.suffix == ".zip":
            args.name = args.target.stem
        else:
            args.name = args.target.name

    idx = find_entry(db, args.name)
    has_entry = idx >= 0
    sha256_install = hasher.sha256(args.target)
    has_changed = (has_entry and db['entries'][idx].get('sha256_install','') != sha256_install) or (not has_entry)

    if has_entry:
        print(f' Entry "{args.name}" exists (#{idx})')
    else:
        print(f' No entry for theme "{args.name}" exists yet')

    if args.version == None:
        if has_entry:
            if has_changed:
                do_it = True
                if args.no_version_increase:
                    do_it = not utils.yesno("Skip increasing version? File changes have been detected, this can have dire consequences.",default=True, noinput=args.noinput)
                if do_it:
                    args.version = db["entries"][idx]["version"] + 1
                    print("  Version increased to", args.version)
                else:
                    args.version = db['entries'][idx]['version']
                    print("  Version kept at",args.version,'at your request')
            else:
                args.version = db['entries'][idx]['version']
                print("  Version kept at",args.version,'because the files have not changed')
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
            args.inherits = client_pesterchum_style.get('inherits','')
        elif has_entry:
            args.inherits = utils.query("Has the `inherits` value of this theme changed? If not, press enter.", db['entries'][idx]['inherits'], args.noinput)
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
        sha256_install = sha256_install,
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
                print(f"{key:>15}: {before_show:>35} -> {after_show}")
        for key in db['entries'][idx]:
            if not key in data:
                before_show = str(db['entries'][idx][key])
                after_show = '<deleted>'
                print(f"{key:>15}: {before_show:>35} -> {after_show}")
                
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

    final_download_path = dst

    match args.client:
        case "pesterchum":
            if args.target.suffix == ".zip":
                try:
                    shutil.copyfile(args.target, dst)
                except shutil.SameFileError as e:
                    print("File already in correct location")
            elif args.target.is_dir:
                final_download_path = dst + ".zip"
                zipto(args.target, final_download_path)
            else:
                raise Exception(
                    f"Error ingesting {dst}: Pesterchum themes must be a folder or a .zip file"
                )

    print()
    print("Computing new download hash...")
    data['sha256_download'] = hasher.sha256(final_download_path)
    print(data['sha256_download'])
    print()

    integrity_list = make_integrity_list(db)

    print("Saving to", args.database)
    write_db(args.database, db)
    print("database saved")
    print()
    print("Writing download integrity list to",args.integrity_file)
    with open(args.integrity_file,'w') as f:
        f.write(integrity_list)
    print("All done!")
    print()
    print("You can now make a commit <3")

def make_integrity_list(db):
    return '\n'.join([x.get('sha256_download','') for x in db['entries']])


def handle_stats(db, args):
    awards = ['🥇', '🥈', '🥉', '🎖']
    match args.views:
        case 'authors':
            authors = {}
            for entry in db['entries']:
                if not entry['author'] in authors:
                    authors[entry['author']] = []
                authors[entry['author']].append(entry)
            sorted_authors = {f'{author}{awards[idx] if idx <=2 else ""}':[x['name'] for x in authors[author]] for idx, author in enumerate(sorted(authors.keys(), key=lambda x: -len(authors[x])))}
            print(utils.treeprint(sorted_authors, root_name="Authors sorted by amount of published themes", non_node_formatter=lambda key,value: str(value), node_formatter=lambda key,value: '►'+str(key)))
        case 'history':
            sorted_entries = sorted(db['entries'],key=lambda x: x['updated'])
            year_dict = {}
            for i in range(
                    utils.timestamp_to_year(sorted_entries[0]['updated']),
                    utils.timestamp_to_year(sorted_entries[-1]['updated'])+1
                    ):
                # My worst line of python ever
                year_dict[i] = [f"{x['name']+(awards[0] if (x == sorted_entries[0] or x == sorted_entries[-1]) else (awards[idx] if idx <= 3 else (awards[len(sorted_entries)-idx-1] if (len(sorted_entries)-idx-1) <=3 else ''))):<25} {utils.timestamp_to_human(x['updated'])}" for idx,x in enumerate(sorted_entries) if utils.timestamp_to_year(x['updated']) == i]
            
            print(utils.treeprint(year_dict, root_name="Timeline of pesterchum themes", non_node_formatter=lambda key,val: '►'+str(val)))
        case 'dependencies':
            root = {}
            visited = {}
            flattened = {x['name']:x for x in db['entries'] if x['client'] == 'pesterchum'}
            hits = {key:0 for key in flattened.keys()}

            def recurse(name):
                if not name in visited:
                    visited[name] = {}
                if not name in hits:
                    hits[name] = 0
                in_database = name in flattened
                if not in_database or flattened[name]['inherits'] in ['', 'pesterchum']:
                    if not name in root:
                        root[name] = visited[name]
                else:
                    recurse(flattened[name]['inherits'])[name] = visited[name]
                    hits[flattened[name]['inherits']] +=1
                return visited[name]

            for item in flattened.keys():
                if not item in visited:
                    recurse(item)
            sorted_root = {f'{x}{awards[idx] if idx <= 3 and hits[x] > 0 else ""}':visited[x] for idx,x in enumerate(sorted(visited.keys(), key=lambda x: -hits[x]))}
            print(utils.treeprint(sorted_root, root_name="pesterchum", indent="  ", node_formatter=lambda key,val: str(key)))

def main(args):
    db = load_db(args.database)

    match args.command:
        case "ingest":
            handle_ingest(db, args)
        case "search":
            handle_search(db, args)
        case "validate":
            handle_validate(db, args)
        case "stats":
            handle_stats(db, args)
        case _:
            print("Uknown command", args.command)


if __name__ == "__main__":
    import sys

    main(parse(sys.argv[1:]))
