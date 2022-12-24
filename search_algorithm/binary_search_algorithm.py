"""
- binary search takes the element at middle of the list 
- if the mid element is greater than target value: ->
- the value to the right are discarded
- else: the value to the left are discarded
- this condition keeps going until the first element <= last element

Time Complexity: O(log n)
"""

def binary_search(arr, val):    
    first, last = 0, len(arr) - 1

    while(first <= last):
        mid = (first + last) // 2

        if arr[mid] == val: return mid
        elif(arr[mid] > val): last = mid - 1
        elif(arr[mid] < val): first = mid + 1

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
    nums = [0, 1, 6, 8 ,9 ,1]

    print("binary search: ", binary_search(nums, 8))
    print("recursive binary search: ",recursive_binary_search(nums, 6))
