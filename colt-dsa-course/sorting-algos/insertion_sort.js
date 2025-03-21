function insertionSort(arr, comparator) {
    if (arr.length === 0) return []

    if (comparator === undefined) {
        comparator = (a, b) => a - b
    }

    for (let i = 1; i < arr.length; i++) {
        let insertValue = arr[i]

        let j = i - 1
        while (j >= 0 && comparator(arr[j], insertValue) > 0) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = insertValue

    }

    return arr
}


let randomNum = [4, 7, 2, 8, 2, 1]

console.log("Insertion Sort:", insertionSort(randomNum))