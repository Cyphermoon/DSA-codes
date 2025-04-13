/* 

SELECTION SORT

This algorithm works by creating an outer loop that
allows the nested loop to find the minimum value and 
replace the current iteration index in the outer loop if one is found

*/




function selectionSort(arr, comparator) {
    if (arr.length === 0 || arr.length === 1) return arr

    if (comparator === undefined || typeof comparator !== "function") {
        comparator = (a, b) => a - b
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let min = i

        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[min], arr[j]) > 0) {
                min = j
            }
        }

        if (min !== i) {
            swap(arr, min, i)
        }
    }

    return arr
}

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const randomNum = [5, 3, 1, 4, 2]


console.log("Selection Sort:", selectionSort(randomNum))