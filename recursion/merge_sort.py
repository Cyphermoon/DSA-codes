def merge_sort(data, start, end):
    if start < end:
        mid = (start + end) // 2
        merge_sort(data, start, mid)
        merge_sort(data, mid + 1, end)
        merge(data, start, mid, end)

def merge(data, start, mid, end):
    temp = []
    i,j,k = start, mid, 0

    # Sort elements in the array
    while(i <= mid and j <= end):
        if data[i] <= data[j]:
            temp[k] = data[i]
            k += 1
            i += 1
        else:
            temp[k] = data[j]
            k += 1
            j += 1
    
    # Empty the left array
    while(i <= mid):
        temp[k] = data[i]
        k += 1
        i += 1

    # Empty the right array
    while(j <= end):
        temp[k] = data[j]
        k += 1
        j += 1

    for i in range(start, end):
        data[i] = temp[i - start]


nums = [1, 2, 3, 4, 5, 6, 7,]
merge_sort(nums, 0, len(nums))

print("Merge Sort: ", nums)
        

