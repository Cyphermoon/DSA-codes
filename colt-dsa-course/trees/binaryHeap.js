class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        /*
        Thought Process: 
            1. Add the input element to then end of the array first,
            2. figure out the parent element: (n - 1) / 2.
            3. iteratively or recursively compare compare with the parent element until it's at the top. Note: update the calculated parentIdx after each positive comparison
         */

        this.values.push(val)
        if (this.values.length <= 1) return null

        let elementIdx = this.values.length - 1
        let parentIdx = undefined

        while (elementIdx <= 0) {


            parentIdx = Math.floor((elementIdx - 1) / 2)
            if (this.values[elementIdx] > this.values[parentIdx]) {
                this.swap(elementIdx, parentIdx)
                elementIdx = parentIdx
            }

            else break
        }

        return elementIdx
    }

    swap(idx1, idx2) {
        [this.values[idx2], this.values[idx1]] = [this.values[idx1], this.values[idx2]]
    }
}