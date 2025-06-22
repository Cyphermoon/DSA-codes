/*
- So the main purpose of this implementation to get a glimpse into how hashmap works
- 
*/


class HashMap {
    constructor(size = 10) {
        this.keyMap = new Array(size)
    }

    set(key, value) {
        /*
           - hash the key
           - if that slot is empty create a nested array in that position and push the value (this approach is known as separate chaining)
           - otherwise just push
           - try to handle duplicates keys by overriding
        */

        const hashedKey = this.hash(key)

        if (!this.keyMap[hashedKey]) this.keyMap[hashedKey] = []

        // Check for existing key and update if found
        for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
            const nestedKey = this.keyMap[hashedKey][i][0]

            if (nestedKey === key) {
                this.keyMap[hashedKey][i][1] = value
                return
            }
        }

        // If key doesn't exist, push new key-value pair
        this.keyMap[hashedKey].push([key, value])
    }

    get(key) {
        /*
            - hash the key
            - return undefined if that slot is empty
            - otherwise loop through that nested array and find the value for that key
        */

        const hashedKey = this.hash(key)

        if (!this.keyMap[hashedKey]) return undefined

        for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
            let currentKey = this.keyMap[hashedKey][i][0]
            let currentValue = this.keyMap[hashedKey][i][1]

            if (key === currentKey) return currentValue
        }

        return undefined
    }

    keys() {
        let keys = []

        for (let i = 0; i < this.keyMap.length; i++) {
            if (!this.keyMap[i]) continue
            for (let j = 0; j < this.keyMap[i].length; j++) {
                let key = this.keyMap[i][j][0]
                keys.push(key)
            }
        }

        return keys
    }


    values() {
        let values = []

        for (let i = 0; i < this.keyMap.length; i++) {
            if (!this.keyMap[i]) continue
            for (let j = 0; j < this.keyMap[i].length; j++) {
                let value = this.keyMap[i][j][1]
                if (values.includes(value)) continue
                values.push(value)
            }
        }

        return values
    }



    hash(key) {
        /*
        Random Thoughts
        - Conceptually we need to accumulate the total of each character's code within the range of array's (keyMap) size
        - The iteration code can be optimized by choosing a minimum length between a fixed value and the array's length
        - 
         */

        if (typeof key !== "string") {
            key = key.toString()
        }

        let total = 0;
        let PRIME_NUMBER = 31

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let charCode = key.charCodeAt(i) - 96

            total = (total * PRIME_NUMBER + charCode) % this.keyMap.length
        }

        return total

    }
}

// Examples to demonstrate HashMap functionality

// Create a new HashMap with default size
const hashMap = new HashMap()

// Example 1: Set key-value pairs
hashMap.set("name", "John Doe")
hashMap.set("age", 30)
hashMap.set("job", "Developer")
hashMap.set("city", "New York")

// Example 2: Get values by keys
console.log("Example 2: Getting values by keys")
console.log("name:", hashMap.get("name"))
console.log("age:", hashMap.get("age"))
console.log("job:", hashMap.get("job"))
console.log("Non-existent key:", hashMap.get("country"))

// Example 3: Update an existing key
console.log("\nExample 3: Updating an existing key")
console.log("Before update - job:", hashMap.get("job"))
hashMap.set("job", "Senior Developer")
console.log("After update - job:", hashMap.get("job"))

// Example 4: Handle collision (keys that hash to the same index)
console.log("\nExample 4: Handling collisions")
// Create a smaller HashMap to force collisions
const smallMap = new HashMap(2)
smallMap.set("a", "Value for a")
smallMap.set("c", "Value for c")  // Will likely hash to the same index as "a"
smallMap.set("e", "Value for e")  // Will likely hash to the same index as "a" or "c"

// Show that we can still get the correct values despite collisions
console.log("a:", smallMap.get("a"))
console.log("c:", smallMap.get("c"))
console.log("e:", smallMap.get("e"))

// Example 5: Get all keys
console.log("\nExample 5: Getting all keys")
console.log("Keys:", hashMap.keys())

// Example 6: Get all values (with no duplicates)
console.log("\nExample 6: Getting all values")
console.log("Values:", hashMap.values())

// Example 7: Store different data types
console.log("\nExample 7: Storing different data types")
const mixedMap = new HashMap()
mixedMap.set("string", "This is a string")
mixedMap.set(42, "This is from a number key")
mixedMap.set(true, "This is from a boolean key")
mixedMap.set({ name: "object" }, "This is from an object key")

console.log("string key:", mixedMap.get("string"))
console.log("number key:", mixedMap.get(42))
console.log("boolean key:", mixedMap.get(true))
console.log("object key:", mixedMap.get({ name: "object" })) // Note: This will likely not work as expected, since objects are compared by reference