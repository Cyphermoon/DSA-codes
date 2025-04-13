function pivot(arr, comparator, startIdx, endIdx) {
    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    if (comparator === undefined || typeof comparator !== "function") {
        comparator = (a, b) => a - b
    }

    const startPivot = arr[startIdx]
    let pivotIdx = startIdx

    for (let i = startIdx + 1; i <= endIdx; i++) {

        if (comparator(startPivot, arr[i]) > 0) {
            pivotIdx++
            swap(arr, pivotIdx, i)
        }
    }

    swap(arr, pivotIdx, startIdx)
    return pivotIdx
}


function quickSort(arr, left = 0, right = arr.length - 1, depth = 0) {
    const indent = "  ".repeat(depth);
    console.log(`${indent}Call at depth ${depth}: [${left}...${right}]`);

    if (left >= right) return

    let pivotIdx = pivot(arr, undefined, left, right)

    //left
    quickSort(arr, left, pivotIdx - 1, depth + 1);

    //right
    quickSort(arr, pivotIdx + 1, right, depth + 1);

    return arr
}

const randomNums = [2, 1, 4, 3, 5];
console.log("Quicksort:", quickSort(randomNums));