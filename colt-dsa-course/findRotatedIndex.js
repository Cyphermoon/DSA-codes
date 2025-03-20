function findRotatedIndex(arr, target) {
    if (arr.length === 0) return 0

    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        // return index if element was found
        if (arr[mid] === target) {
            return mid
        }

        // check if midpoint is within the left range
        if (arr[left] <= arr[mid]) {

            // discard the right if target is within the left range
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1
            } else {
                // discard the left if target is not within the left range
                left = mid + 1
            }
        } else {
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return -1
}

console.log("Find rotated idx:", findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3))