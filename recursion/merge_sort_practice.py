def merge_sort(nums):
    # Base case
    if len(nums) == 1:
        return nums
    
    # Get middle index
    mid = len(nums) // 2

    # Split array into two halves
    left = merge_sort(nums[0:mid])
    right = merge_sort(nums[mid:])

    return merge(left, right)


def merge(left, right):
    # use two pointers to represent starting index on both arrays
    # iteratively loop until either index is not out of range
    # during each iteration compare the element on the current left index with the one on the right
    # push the element to an array if it is less than the one on the right
    # otherwise push the on the right

    left_idx = 0
    right_idx = 0
    sorted_nums = []

    # Compare elements on both side and push the element of lesser value
    while left_idx < len(left) and right_idx < len(right):
        if left[left_idx] < right[right_idx]:
            sorted_nums.append(left[left_idx])
            left_idx += 1
        else:
            sorted_nums.append(right[right_idx])
            right_idx += 1

    # empty the left side if it remains
    while left_idx < len(left):
        sorted_nums.append(left[left_idx])
        left_idx += 1

    # empty the right side if it remains
    while right_idx < len(right):
        sorted_nums.append(right[right_idx])
        right_idx += 1




nums = [6, 5, 3, 2, 4, 1]
sorted_nums = merge_sort(nums)

print("The sorted array is: ", sorted_nums)