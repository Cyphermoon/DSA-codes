function selectionSort(arr, comparator) {
    if (arr.length === 0) return []

    if (comparator === undefined) {
        comparator = (a, b) => a - b
    }

    for (let i = 0; i < arr.length; i++) {
        let min = i

        for (let j = i; j < arr.length; j++) {
            let comparatorSignal = comparator(arr[j], arr[min])
            if (comparatorSignal < 0) {
                min = j
            }
        }

        if (min !== i) {
            swap(arr, i, min)
        }
    }

    return arr

}

function swap(arr, idx1, idx2) {
    [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]]
}

const randomNum = [5, 3, 1, 4, 2]
selectionSort(randomNum)

console.log("Selection Sort:", randomNum)