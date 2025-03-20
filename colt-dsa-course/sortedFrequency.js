function sortedFrequency(arr, num) {
    // Find first occurrence of num
    const firstIdx = findFirst(arr, num);

    // If num doesn't exist in the array
    if (firstIdx === -1) return -1;

    // Find last occurrence of num
    const lastIdx = findLast(arr, num);

    // Calculate frequency by subtracting indices
    return lastIdx - firstIdx + 1;
}

// Helper function to find first occurrence using binary search
function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            // Found a match, but keep searching left side
            // to find the first occurrence
            result = mid;
            right = mid - 1;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// Helper function to find last occurrence using binary search
function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            // Found a match, but keep searching right side
            // to find the last occurrence
            result = mid;
            left = mid + 1;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

console.log("Sorted Frequency:", sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2))