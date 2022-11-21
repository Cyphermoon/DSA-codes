class Array:
    count = 0

    def __init__(self, length):
        self.arr = [] 
        self.length = length
    
    def __str__(self):
        return f"{self.arr}"
    
    def insert(self, element):
        if self.count < self.length:
            self.arr.append(element)
            self.count += 1
        else:
            print("length is full")
    
    def indexOf(self, element):
        return self.arr.index(element)


arr = Array(1)
arr.insert(3)
arr.insert(6)
print(arr)
    