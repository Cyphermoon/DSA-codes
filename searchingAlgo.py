# O(n)
def linear_search(arr, val):
    for i, item in enumerate(arr):
        if item == val: return i

    return -1


def binary_search(arr, val):
    
    first, last = 0, len(arr) -1

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


nums = [0, 1, 2, 3, 4, 5, 6, 7, 8]

print("linear search: ", linear_search(nums, 6))
print("binary search: ", binary_search(nums, 6))
print("recursive binary search: ",recursive_binary_search(nums, 6))
