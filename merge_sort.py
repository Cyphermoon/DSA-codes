def merge_sort(nums):
    if len(nums) <= 1: 
        return nums

    l,r = split(nums)

    left = merge_sort(l)
    right = merge_sort(r)

    return merge(left, right)


def split(items):
    """
    Return two half of the list
    """

    mid = len(items) // 2
    left = items[:mid]
    right = items[mid:]

    return left, right


def merge(left, right):
    output = []
    left_index = 0
    right_index = 0
    print("left:",left, "right:",right)

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
    
    print("output: ", output)
    return output


def verify_sorted(items):
    if len(items) <= 1:
        return True
    
    return items[0] < items[1] and verify_sorted(items[1:])


nums = [73,92, 28, 7, 82, 2, 52]
print(merge_sort(nums))
