import os
from pathlib import Path
from datetime import datetime as DT

def treeprint(item, root_name="", wideness=2, indent="", non_node_formatter=None, node_formatter=None, node_char="━", node_split_char="┳", vertical_split_char="┣", vertical_char="┃", corner_char="┗", corner_horizontal_char="━", horizontal_char='━', whitespace_char=" "):
    def recurse(item, mykey="", wideness=0):
        if type(item) == dict or type(item) == list:
            is_list = type(item) == list
            lines = [[True,str(node_char if len(item) == 0 else node_split_char) +''+ node_formatter(mykey, item)]]
            collection = []
            connections = 0
            for index,key in enumerate(item):
                if is_list:
                    key = index
                coll = recurse(item[key], key, wideness=wideness)
                if coll[0][0]:
                    connections += 1
                collection += coll
            for idx,subitem in enumerate(collection):
                connected = subitem[0]
                stringe = subitem[1]
                if connected and connections > 0:
                    if connections == 1:
                        linetext = corner_char + corner_horizontal_char + corner_horizontal_char*wideness + stringe 
                    else:
                        linetext = vertical_split_char + horizontal_char + horizontal_char*wideness + stringe 
                    connections -= 1
                if not connected and connections > 0:
                    linetext = vertical_char + whitespace_char + whitespace_char*wideness + stringe
                elif not connected:
                    linetext = whitespace_char + whitespace_char + whitespace_char*wideness + stringe

                lines.append([
                    False,
                    linetext
                ])
        else:
            stringe = non_node_formatter(mykey, item)
            return [[True, stringe]]
        return lines
    if non_node_formatter == None:
        non_node_formatter = lambda key,value: str(key)+': '+str(value)
    if node_formatter == None:
        node_formatter = lambda key,value: str(key)
    result = recurse(item, mykey=root_name, wideness=wideness)
    return '\n'.join([indent+x[1] for x in result])

def timestamp_to_year(timestamp):
    return DT.fromtimestamp(timestamp).year

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

def get_creation_time(path):
    if os.path.isfile(path):
        return os.path.getctime(path)
    elif os.path.isdir(path):
        most_recent = -1
        for item in os.listdir(path):
            new_time = get_creation_time(os.path.join(path, item))
            if new_time > most_recent:
                most_recent = new_time
        return most_recent
    raise FileNotFoundError()

def timestamp_to_human(timestamp):
    return DT.fromtimestamp(timestamp).strftime("%d/%m/%Y %H:%M")

def get_file_size(path):
    size = 0
    if os.path.isfile(path):
        return os.path.getsize(path)
    elif os.path.isdir(path):
        for item in os.listdir(path):
            size += get_file_size(os.path.join(path, item))
        return size
    raise FileNotFoundError()

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