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

        if (this.values.length === 0) return null

        this.values.push(val)
        if (this.values.length <= 1) return null

        let elementIdx = this.values.length - 1
        let parentIdx = undefined

        while (elementIdx >= 0) {
            parentIdx = Math.floor((elementIdx - 1) / 2)
            if (this.values[elementIdx] > this.values[parentIdx]) {
                this.swap(elementIdx, parentIdx)
                elementIdx = parentIdx
            }

            else break
        }

        return elementIdx
    }

    extractMax() {
        //Thought process (hopefully i gain more consistency this from now. it's been a while)
        // Remove the maximum element from the tree
        // take the last element and put it in the max element place
        // the sink down until you get to the right spot and the heap is in the correct order

        const removedElem = this.values[0]
        const end = this.values.pop()

        if (this.values.length <= 0) return end
        this.values[0] = end

        let parentIdx = 0
        let parentElem = this.values[parentIdx]

        while (true) {
            let leftChildIdx = (parentIdx * 2) + 1
            let leftChildElem = leftChildIdx < this.values.length ? this.values[leftChildIdx] : -Infinity

            let rightChildIdx = (parentIdx * 2) + 2
            let rightChildElem = rightChildIdx < this.values.length ? this.values[rightChildIdx] : -Infinity

            if (leftChildElem === -Infinity && rightChildElem === -Infinity) break;

            let maxChild = Math.max(leftChildElem, rightChildElem)

            let maxChildIdx;
            if (maxChild === rightChildElem) maxChildIdx = rightChildIdx
            if (maxChild === leftChildElem) maxChildIdx = leftChildIdx

            if (parentElem > maxChild) break

            this.swap(parentIdx, maxChildIdx)
            parentIdx = maxChildIdx
        }

        return removedElem
    }

    swap(idx1, idx2) {
        [this.values[idx2], this.values[idx1]] = [this.values[idx1], this.values[idx2]]
    }
}

//TODO: Test out the extractMax function with actual values and stop through the implementation