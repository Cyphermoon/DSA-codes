def merge_sort(nums):
    """
    Sorts a list using the merge sort algorithm

    Time complexity: O(n log n)
    Space complexity: O(n)
    """
    if len(nums) <= 1: 
        return nums

    l,r = split(nums)

    left = merge_sort(l)
    right = merge_sort(r)

    return merge(left, right)


def split(items):
    """
    Splits the list into halves and return both half

    Time complexity: O(log n)
    """

    mid = len(items) // 2
    left = items[:mid]
    right = items[mid:]

    return left, right


def merge(left, right):
    """
    Accepts two lists and returns a new sorted list 

    Time complexity: O(n logn)
    """
    output = []
    left_index = 0
    right_index = 0

    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            output.append(left[left_index])
            left_index += 1
        else: 
            output.append(right[right_index])
            right_index += 1
    
    while right_index < len(right):
        output.append(right[right_index])
        right_index += 1
    
    while left_index < len(left):
        output.append(left[left_index])
        left_index += 1
    
    
    return output


def verify_sorted(items):
    """
    This method verifies that the list is sorted
    """
    if len(items) <= 1:
        return True
    
    return items[0] < items[1] and verify_sorted(items[1:])


nums = [73,92, 28, 7, 82, 2, 52]
merged_num = merge_sort(nums)
print(verify_sorted(merged_num))



