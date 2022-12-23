# O(n)
def linear_search(arr, val):
    for i, item in enumerate(arr):
        if item == val: return i

    return -1


nums = [0, 1, 2, 3, 4, 5, 6, 7, 8]

print("linear search: ", linear_search(nums, 6))