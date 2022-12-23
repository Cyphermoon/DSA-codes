import random

def bogo_sort(unsorted_list):
    """
    This algorithm is not recommend ever
    - it works by randomizing an array until the array is sorted
    """

    while not verify_sorted(unsorted_list):
       random.shuffle(unsorted_list)
    
    return unsorted_list


def verify_sorted(list):
    """
    It verifies if the array is sorted
    """
    
    for i in  range(len(list) - 1):
        if list[i] > list[i + 1]:
            return False
    return True


# unsorted_list = [73,92, 28, 7, 82, 2, 52, 3, 5, 6, 2, 1, 9]
unsorted_list = [3, 2, 4]
sorted_list = bogo_sort(unsorted_list)
print(sorted_list)

