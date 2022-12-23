
def quick_sort(unsorted_list):
    """
    - This algorithm selects a pivot: an element from the list
    - then group the element that are lesser than the pivot in the left var
    - it groups the element that are greater than the pivot in the right var
    - it then recursively do the same for the left and right variable
    """

    if len(unsorted_list) <= 1:
        return unsorted_list

    pivot = unsorted_list[0]
    left, right = splitAtPivot(unsorted_list, pivot)

    return quick_sort(left) + [pivot] + quick_sort(right)


def splitAtPivot(list, pivot):
    left = []
    right = []

    for i in range(len(list)):
        if list[i] < pivot:
            left.append(list[i])
        elif list[i] > pivot:
            right.append(list[i])

    return left, right


unsorted_list = [73,92, 28, 7, 82, 2, 52, 3, 5, 6, 2, 1, 9]
sorted_list = quick_sort(unsorted_list)
print(sorted_list)
