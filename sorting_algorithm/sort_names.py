import os
from quicksort_algorithm import quick_sort

unsorted_file_path = os.path.join("values", "unsorted_names.txt")
sorted_file_path = os.path.join("values", "sorted_names.txt")


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


def write_names(file_path, names):
    """
    It writes all the content from a list to the target file path
    """
    try:
        with open(file_path, "w") as file_obj:
            for name in names:
                file_obj.write(f"{name}\n")
        return True
    except Exception as e:
        print(e)
        return False


def sort_names(unsorted_names):
    return quick_sort(unsorted_names)


if __name__ == "__main__":
    names = load_names(unsorted_file_path)
    sorted_names = sort_names(names)
    write_names(sorted_file_path, sorted_names)







