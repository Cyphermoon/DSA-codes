/*
    This algorithm features two loops

    The first loop iterates backwards which allows the inner loop to pass through 
    the arr multiple times and sort the array
*/



function bubbleSort(arr, comparator) {
    if (arr.length <= 1) return arr

    if (typeof comparator !== "function") {
        comparator = (a, b) => a - b
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        let isSwapped = false

        for (let j = 0; j <= i - 1; j++) {
            let comparatorSignal = comparator(arr[j], arr[j + 1])

            if (comparatorSignal > 0) {
                swap(arr, j, j + 1)
                isSwapped = true
            }
        }

        if (!isSwapped) break
    }

    return arr
}


function swap(arr, idx1, idx2) {
    [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]]
}

const randomNum = [5, 3, 1, 4, 2]

console.log("Bubble Sort Random Number:", bubbleSort(randomNum))

