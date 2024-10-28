def binary_search(input, left, right, num):
    if left >= right:
        return -1
    
    mid = (left + right) // 2

    if num == input[mid]:
        return mid
    
    if num < input[mid]:
        return binary_search(input, left, mid - 1, num)
    
    return binary_search(input, mid + 1, right, num)


nums = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]
target = 3

print(f"Binary Search: The index of {target} is", binary_search(nums, 0, len(nums), target))