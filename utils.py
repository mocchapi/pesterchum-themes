import os
import hashlib
from pathlib import Path
from datetime import datetime as DT

# \\ https://stackoverflow.com/a/54477583 ty <3 
def md5_update_from_file(filename, hash):
    assert Path(filename).is_file()
    with open(str(filename), "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash.update(chunk)
    return hash


def md5_file(filename):
    return md5_update_from_file(filename, hashlib.md5()).hexdigest()


def md5_update_from_dir(directory, hash):
    assert Path(directory).is_dir()
    for path in sorted(Path(directory).iterdir()):
        hash.update(path.name.encode())
        if path.is_file():
            hash = md5_update_from_file(path, hash)
        elif path.is_dir():
            hash = md5_update_from_dir(path, hash)
    return hash


def md5_dir(directory):
    return md5_update_from_dir(directory, hashlib.md5()).hexdigest()
# // https://stackoverflow.com/a/54477583

# \\ me
def simple_fuzzy_match(search_string, target, match_empty=False):
    # Parses:
    # "*ending"
    # "start*"
    # "*anywhere*"
    # "strict"
    #
    # does NOT parse:
    # "in*the*middle"
    start = search_string.startswith('*')
    end = search_string.endswith('*')

    if not match_empty and target == '' and (start and end):
        return False
    
    if start:
        return target.endswith(search_string[1:])
    elif end:
        return target.startswith(search_string[:-1])
    elif start and end:
        return search_string[1:-1] in target
    else:
        return search_string == target

def get_modify_time(path):
    if os.path.isfile(path):
        return os.path.getmtime(path)
    elif os.path.isdir(path):
        most_recent = -1
        for item in os.listdir(path):
            new_time = get_modify_time(os.path.join(path, item))
            if new_time > most_recent:
                most_recent = new_time
        return most_recent
    raise FileNotFoundError()

def timestamp_to_human(timestamp):
    return DT.fromtimestamp(timestamp).strftime("%d/%m/%Y %H:%M")


def query(question, default=None, noinput=False, display_default=True):
    question = "> " + question
    if noinput:
        print(question)
        print("Defaulting to", default)
        return default
    out = input(
        question + ((" [" + str(default) + "]") if (default != None and display_default) else "") + ": "
    )
    if out == "":
        return default
    else:
        return out

def yesno(question, default=True, noinput=False):
    return query(question + ' (y/n)', default='Yes' if default else 'No', noinput=noinput).lower().startswith('y')
# // me