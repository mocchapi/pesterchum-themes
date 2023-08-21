import os
import hashlib
from pathlib import Path





def sha256(path):
    if os.path.isfile(path):
        return sha256_file(path)
    elif os.path.isdir(path):
        return sha256_dir(path)
    else:
        raise FileNotFoundError()





# \\ modified https://stackoverflow.com/a/54477583 ty <3 
def sha256_update_from_file(filename, hash):
    assert Path(filename).is_file()
    with open(str(filename), "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash.update(chunk)
    return hash


def sha256_file(filename):
    return sha256_update_from_file(filename, hashlib.sha256()).hexdigest()


def sha256_update_from_dir(directory, hash):
    assert Path(directory).is_dir()
    for path in sorted(Path(directory).iterdir()):
        hash.update(path.name.encode())
        if path.is_file():
            hash = sha256_update_from_file(path, hash)
        elif path.is_dir():
            hash = sha256_update_from_dir(path, hash)
    return hash



def sha256_dir(directory):
    return sha256_update_from_dir(directory, hashlib.sha256()).hexdigest()
# // modified https://stackoverflow.com/a/54477583
