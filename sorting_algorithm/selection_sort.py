def selection_sort(unsorted_list):
    """
    -This algorithm sorts the list by moving the lowest
    -element form the unsorted_list to the sorted_list
    -until the unsorted_list is empty
    Time Complexity O(n2)
    """
    sorted_list = []

    while unsorted_list:
        min_index = find_min_index(unsorted_list)
        sorted_list.append(unsorted_list[min_index])
        unsorted_list.pop(min_index)
    return sorted_list


def find_min_index(list):
    """
    This function finds the minimum index of an element in a list
    """
    min_index = 0

    for i in range(1,len(list)):
        if list[i] < list[min_index]:
            min_index = i
    return min_index


unsorted_list = [3, 5, 6, 2, 1, 9]
sorted_list = selection_sort(unsorted_list)
print(sorted_list)