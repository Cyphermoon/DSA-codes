function sameFrequency(firstSet, secondSet) {
    let firstSetArray = firstSet.toString().split("").map(Number)
    let secondSetArray = secondSet.toString().split("").map(Number)

    if (firstSetArray.length !== secondSetArray.length) return false

    let firstSetMap = {}
    let secondSetMap = {}

    for (let num of firstSetArray) {
        firstSetMap[num] = (firstSetMap[num] || 0) + 1
    }

    for (let num of secondSetArray) {
        secondSetMap[num] = (secondSetMap[num] || 0) + 1
    }

    for (let num of firstSetArray) {
        if (!(num in secondSetMap)) return false
        if (firstSetMap[num] !== secondSetMap[num]) return false
    }

    return true
}

console.log("Same Frequency:", sameFrequency(4192, 1249))