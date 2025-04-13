function pivot(arr, startIdx, endIdx) {
    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    const startPivot = arr[startIdx]
    let pivotIdx = startIdx

    for (let i = startIdx + 1; i < endIdx; i++) {
        if (startPivot > arr[i]) {
            pivotIdx++
            swap(arr, pivotIdx, i)
        }
    }

    swap(arr, pivotIdx, startIdx)
    return pivotIdx
}


function quickSort(arr, left = 0, right = arr.length) {
    console.log(`Sorting subarray: ${arr.slice(left, right)} (${left}-${right - 1})`);

    if (right - left <= 1) return arr
    if (left >= right) return

    let pivotIdx = pivot(arr, left, right)

    //left
    quickSort(arr, left, pivotIdx)

    //right
    quickSort(arr, pivotIdx + 1, right)

    return arr
}

const randomNums = [2, 1, 4, 3, 5];
console.log("Quicksort:", quickSort(randomNums));