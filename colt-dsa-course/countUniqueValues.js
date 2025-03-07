/*
    Understanding the Problem
    - A function that returns uniqueNumber number of items on a sorted array with possible negative numbers
    - E.G [1, 1, 1, 2, 4, 5] ---> 4

    Approach to solve the Problem
    - Use a two pointer pattern
    - The first pointer will hold the value of the current index
    - The second pointer will look ahead until it finds a value different from the one in the first pointer
    - if it does, the first pointer pushes it's value to a uniqueArray and moves to the new position in the second pointer
*/


function countUniqueNumber(sortedNumber) {
    let uniqueNumbers = []
    let firstPointer = 0

    if (sortedNumber.length === 0) return 0

    uniqueNumbers.push(sortedNumber[firstPointer])

    for (let i = 1; i < sortedNumber.length; i++) {
        let firstPointerValue = sortedNumber[firstPointer]
        let secondPointerValue = sortedNumber[i]

        if (firstPointerValue !== secondPointerValue) {
            uniqueNumbers.push(sortedNumber[i])
            firstPointer = i
        }
    }

    return uniqueNumbers.length
}

const uniqueNumbers = countUniqueNumber([1])
console.log("Count of unique numbers:", uniqueNumbers)

