/*
   This algorithm works by bubbling the larger elements to the top.

   It creates an outer loop that starts iteration from the end.
   then creates a nested loop that swaps adjacent element if the one in front is smaller.

   This logic let's the algorithm progressively puts the larger element at the end and shrinks the iteration space of the nested loop
*/



function bubbleSort(arr, comparator) {
    if (arr.length === 0 || arr.length === 1) return arr


    if (comparator === undefined || typeof comparator !== "function") {
        comparator = (a, b) => a - b
    }


    for (let i = arr.length - 1; i > 0; i--) {
        let isSwapped = false

        for (let j = 0; j < i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                swap(arr, j, j + 1)
                isSwapped = true
            }
        }

        if (!isSwapped) break
    }


    return arr
}



function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}


const randomNum = [5, 3, 1, 4, 2, 8, 7, 2]

console.log("Bubble Sort Random Number:", bubbleSort(randomNum))

