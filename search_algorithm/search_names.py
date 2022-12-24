from binary_search_algorithm import binary_search
import os

def load_names(file_path):
    """
    It loads all the content in a file from the target file path 
    and convert them to a list
    """
    try:
        with open(file_path, "r") as names_file:
            names_list = names_file.read().split("\n")

    except Exception as e:
        print(e)
    else:
        return names_list


def search_names(names_to_search, name_list):
    indices = []
    for name in names_to_search:
        indices.append(binary_search(name_list, name)) 
    return indices


names_to_search = [
    "Adonis Julius Archer", "London Lindsey", "Shelby Nathan Yoder",
    "Frankie Conner Ritter", "Vaughn Lewis"
]

sorted_names_file_path = os.path.join("values", "sorted_names.txt")
name_list = load_names(sorted_names_file_path)


print(search_names(names_to_search, name_list))