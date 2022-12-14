"""
An implementation of a linked list class
"""

class Node:
    value = None
    next = None

    def __init__(self, value):
        self.value = value


class LinkedList:
    head = None

    def __init__(self, value):
        self.head = Node(value)


    def isEmpty(self):
        #Checks is the list is empty
        return self.head is None
    

    def prepend(self, value):
        """
        Adds a node to the beginning of a list
        """

        if(self.isEmpty()): 
            self.head = node

        node = Node(value)
        node.next = self.head
        self.head = node

    
    def insert(self, index, value):
        """
        Add a node at a particular index
        """
        node = Node(value)

        if(self.isEmpty()):
            self.head = node
            return

        previousNode, currentNode = self.getPreviousAndCurrentNode(index)

        node.next = currentNode
        previousNode.next = node


    def remove(self, index):
        """
        Removes a node at the specified index
        """

        if(self.isEmpty()):
            self.head = None
            return

        previousNode, currentNode = self.getPreviousAndCurrentNode(index)
        nextNode = currentNode.next

        previousNode.next = nextNode
        currentNode.next = None


    def getLastNode(self):
        current = self.head

        while(current is not None):

            if(current.next is None):
                return current

            current = current.next
    

    def getNode(self, index):
        current = self.head

        while(index > 0):
            current = current.next
            index -= 1

        return current


    def getPreviousNode(self, index):
        current = self.head

        while(index > 1):
            current = current.next
            index -= 1

        return current


    def getPreviousAndCurrentNode(self, index):
        current = self.head

        while(index > 1):
            current = current.next
            index -= 1

        return current, current.next


    def append(self, value):
        """ 
        Add a node to the end of a list
        """
        node = Node(value)

        if(self.isEmpty()): 
            self.head = node
        else:
            lastNode = self.getLastNode()
            lastNode.next = node
    

    def __str__(self):
        current = self.head
        output = ""

        while(current is not None):
            if current == self.head:
                output += f"[head: {current.value}] -> "
            elif current.next is None:
                output += f"[tail: {current.value}]"
            else:
                output += f"{current.value} -> "

            current = current.next
        return output


numsList = LinkedList(1)
numsList.append(2)
numsList.append(3)
numsList.append(4)
numsList.append(5)
numsList.insert(2, 2.5)
numsList.remove(2)
print(numsList)