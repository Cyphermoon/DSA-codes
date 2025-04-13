/* 
Insertion Sort

insertion sort works by gradually building a sorted portion of the array on the left

as the outer loop progresses, the inner loop goes through the loop and put element in their correct order

*/



function insertionSort(arr, comparator) {
    if (arr.length <= 1) return arr

    if (comparator === undefined && typeof comparator !== "function") {
        comparator = (a, b) => a - b
    }

    for (let i = 1; i < arr.length; i++) {
        const insertValue = arr[i]

        let j = i - 1
        while (j >= 0 && comparator(arr[j], insertValue) > 0) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = insertValue
    }

    return arr
}


let randomNum = [2, 4, 3]

console.log("Insertion Sort:", insertionSort(randomNum))