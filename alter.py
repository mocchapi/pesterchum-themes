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


def query(question, default=None, noinput=False):
    question = "> " + question
    if noinput:
        print(question)
        print("Defaulting to", default)
        return default
    out = input(
        question + ((" [" + str(default) + "]") if default != None else "") + ": "
    )
    if out == "":
        return default
    else:
        return default


def format_entry(
    name,
    author="",
    client="",
    download="",
    version=0,
    updated=round(time.time()),
    source="",
    description="",
):
    return {
        "name": name,
        "author": author,
        "client": client,
        "download": download,
        "version": version,
        "updated": updated,
        "source": source,
        "description": description,
    }


def zip_pchum_theme_folder(
    path,
):
    pass


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
        "--destination", type=Path, default=Path("./themes/"), help="Destination folder"
    )

    sub_parsers = parser.add_subparsers(dest="command")

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
        "--source", type=str, default=None, help="Override url to source code"
    )
    ingest_parser.add_argument(
        "--description", type=str, default=None, help="Override description"
    )

    # add_parser = sub_parsers.add_parser("add") # Manually add item
    # add_parser

    # delete_parser = sub_parsers.add_parser("delete") # Delete item
    # delete_parser

    return parser.parse_args(args_in)


def main(args):
    db = load_db(args.database)

    match args.command:
        case "ingest":
            if not args.target.exists():
                raise FileNotFoundError()

            if args.client == None and (
                args.target.is_dir() or args.target.suffix == ".zip"
            ):
                args.client = "pesterchum"

            if args.name == None:
                if args.target.suffix == ".zip":
                    args.name = args.target.stem
                else:
                    args.name = args.target.name

            idx = find_entry(db, args.name)
            has_entry = idx >= 0

            if has_entry:
                print(f'Entry "{args.name}" exists (#{idx})')
            else:
                print(f'No entry for theme "{args.name}" exists yet')

            if args.version == None:
                if has_entry:
                    args.version = db["entries"][idx]["version"] + 1
                    print("Version increased to", args.version)
                else:
                    args.version = 0

            if args.description == None:
                if has_entry:
                    args.description = db["entries"][idx]["description"]
                else:
                    args.description = query("Description", "", args.noinput)

            if args.source == None:
                if has_entry:
                    args.source = db["entries"][idx]["source"]
                else:
                    args.source = "https://github.com/mocchapi/pesterchum-themes"

            if args.author == None:
                if has_entry:
                    args.author = db["entries"][idx]["author"]
                else:
                    args.author = query("Author name", "unknown", args.noinput)

            dst = str(args.destination) + "/" + args.client + "/" + args.target.name
            match args.client:
                case "pesterchum":
                    print(dst)
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

                    download_name = args.host + args.client + "/" + args.name + ".zip"
                case "godot":
                    print("Godot not yet supported")

            data = format_entry(
                args.name,
                author=args.author,
                client=args.client,
                download=download_name,
                version=args.version,
                source=args.source,
                description=args.description,
            )

            if has_entry:
                db["entries"][idx] = data
            else:
                db["entries"].append(data)

            print("Saving to", args.database)
            write_db(args.database, db)
            print("All done!")
            print()
            print("You can now make a commit <3")
        case _:
            print("Uknown command", args.command)


if __name__ == "__main__":
    import sys

    main(parse(sys.argv[1:]))
