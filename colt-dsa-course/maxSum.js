/*
        The function should find the maximum sum subArray of n consecutive element
        maxSum([1,2,3,4,5,6,7], 2) -> 13

        - Naive approach
          Create an outer loop that starts at the first element right up until (numArray.length - n)
          Create a nested loop that use the outer loop index as a base line and add the next n consecutive element
          Keep track of the sum of this consecutive elements and return the max number at the end of the iteration

        - Sliding Window Approach
          This pattern involves creating a window on a large set of data. the window might be an array or a number from one position to another. This window can either increase or decrease depending on certain condition, it is useful for keeping a subset of a large data
             
                Create a loop that gets the first n sum and store that in a temp variable
                Create another loop that starts at n. inside this loop, the max n sum should be calculated by subtracting the first element that was used to calculate the sum from the tempSum and add the next element we are trying to calculate the sum for.
*/

// Naive Approach
function maxSumSubArray(numArray, n) {
    if (n > numArray.length) return undefined

    let max = -Infinity

    for (let i = 0; i <= numArray.length - n; i++) {
        let tempSum = 0

        for (j = 0; j < n; j++) {
            tempSum += numArray[i + j]
        }

        if (tempSum > max) {
            max = tempSum
        }

    }

    return max
}

// Sliding Window Approach
function maxSumSubArray(numArray, n) {

    if (numArray.length < n) return undefined

    let tempSum = 0
    let max = -Infinity

    for (let i = 0; i < n; i++) {
        tempSum += numArray[i]
    }

    for (let i = n; i < numArray.length; i++) {
        tempSum = tempSum - numArray[i - n] + numArray[i]
        max = Math.max(tempSum, max)
    }

    return max
}

console.log("Max sum sub array:", maxSumSubArray([1, 2, 3, 4, 5, 6, 7, 8], 2))