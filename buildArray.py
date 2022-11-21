class Array:
    count = 0

    def __init__(self, length):
        self.arr = [None] * length 
        self.length = length
    
    def __str__(self):
        return f"{self.arr[:self.count]}"
    
    def insert(self, element):
        if self.count >= self.length:
            newArray = self.arr * 9
            for item,i in enumerate(self.arr):
                newArray[i] = item

            self.arr = newArray
            self.length = len(self.arr)
    
        self.arr[self.count] = element
        self.count += 1

    def removeAt(self, index):
        for i in range(index, self.length - 1):
            self.arr[i] = self.arr[i + 1]

    def indexOf(self, element):
        return self.arr.index(element)


arr = Array(1)
arr.insert(2)
arr.insert(1)
arr.insert(5)
arr.insert(18)
arr.removeAt(1)

print(arr)