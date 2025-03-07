function findLongestSubstring(word) {
    if (word.length === 0) return 0

    let longest = 0
    let start = 0
    let seen = {}

    for (let i = 0; i < word.length; i++) {
        let char = word[i]

        if (seen[char] >= start) {
            start = seen[char] + 1
        }

        seen[char] = i

        longest = Math.max(longest, i - start + 1)
    }

    return longest
}


console.log("longest distinct characters", findLongestSubstring('thisisawesome'))

// At 3am when you wake up, instead of going to DSA directly, why don't you warmup, turn on the light and stay in a seated position before moving on with the rest of your day?