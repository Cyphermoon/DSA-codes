"""
- binary search takes the element at middle of the list 
- if the mid element is greater than target value: ->
- the value to the right are discarded
- else: the value to the left are discarded
- this condition keeps going until the first element <= last element

Time Complexity: O(log n)
"""

def positionToMove(array, testValueIndex, target):
    """
    This function tells the binary search which position to move 
    """
    testValue = array[testValueIndex]

    if testValue == target:
        # move back if the previous element is the same as the current
        if array[testValueIndex - 1] and array[testValueIndex - 1] == testValue:
            return "left"

        return "found"

    # move back if the testValue is greater than target
    if testValue > target:
        return "left"

    else: 
        return "right"


def binary_search(arr, val):    
    first, last = 0, len(arr) - 1

    while(first <= last):
        mid = (first + last) // 2
        result = positionToMove(arr, mid, val)

        if result == "found": return mid
        elif(result == "left"): last = mid - 1
        elif(result == "right"): first = mid + 1

    return -1


def recursive_binary_search(list, target):
    if len(list) == 0:
        return False

    else:
        mid = len(list) // 2

        if list[mid] == target: 
            return True
        elif list[mid] > target: 
            return recursive_binary_search(list[:mid], target)
        elif list[mid] < target: 
            return recursive_binary_search(list[mid + 1:], target)


if __name__ == "__main__":
    nums = [0, 1, 6, 6, 6, 6, 6, 6, 8 ,9 ,1]

    print("binary search: ", binary_search(nums, 8))

