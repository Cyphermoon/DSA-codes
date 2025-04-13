function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
    let max = -Infinity

    for (let num of nums)
        max = Math.max(digitCount(num), max)


    return max
}

function radixSort(arr) {
    if (arr.length <= 1) return arr

    let largestNumCount = mostDigits(arr)

    for (let k = 0; k < largestNumCount; k++) {
        let bucket = Array.from({ length: 10 }, () => [])

        for (let i = 0; i < arr.length; i++) {
            const num = arr[i]
            const digit = getDigit(num, k)
            bucket[digit].push(num)
        }

        arr = [].concat(...bucket)
    }

    return arr
}

// Test the radixSort function with a list of numbers
const nums = [45, 2, 66, 12, 34];
console.log("Unsorted:", nums);
const sortedNums = radixSort(nums);
console.log("Sorted:", sortedNums);
