from linkedList import LinkedList

"""
Todo: write a verify function for linked list
"""


def merge_sort(linkedList:LinkedList):
    """
    This is a merge sort algorithm for a linkedList:

    -Recursively divide the linked list
    -sort each list back up

    Time complexity: O(kn log n)
    """

    if linkedList.size() == 1 or linkedList.head is None:
        return linkedList
    
    l, r = split(linkedList)

    left = merge_sort(l)
    right = merge_sort(r)

    return merge(left, right)


def split(linkedList:LinkedList):
    """
    Splits a linked list from the middle into two sub-linked-list 

    Time complexity: O(k log n)
    """

    if linkedList is None or linkedList.head is None:
        left = linkedList
        right = None

        return left, right
    
    else:
        size = linkedList.size()
        mid = size // 2

        mid_node = linkedList.getNode(mid - 1)

        left = linkedList
        right = LinkedList()
        right.head = mid_node.next
        mid_node.next = None 

        return left, right


def merge(left:LinkedList, right:LinkedList):
    """
    Sorts data from two list and return a new sorted linked list
    Time complexity: O(n)
    """
    output = LinkedList(0)
    current = output.head

    left_head = left.head
    right_head = right.head 

    while left_head or right_head:
        if left_head is None:
            current.next = right_head
             #call next on right to set loop condition to false
            right_head = right_head.next
        elif right_head is None:
            current.next = left_head
            #call next on the left to set loop condition to false
            left_head = left_head.next
        else:
            #Obtain data to perform comparison operations
            left_data = left_head.value
            right_data = right_head.value
            #if data on left is less than right data: add left to the end of the list
            if(left_data < right_data):
                current.next = left_head
                #Move left head to next node
                left_head = left_head.next
            #else add data on right to the end of a list
            else:
                current.next = right_head
                #Move right head to next node
                right_head = right_head.next
        current = current.next

    #discard fake head
    output.head = output.head.next
    return output



numsList = LinkedList(1)
numsList.append(7)
numsList.append(5)
numsList.append(2)
numsList.append(8)
numsList.append(5)
print(numsList)
mergedList = merge_sort(numsList)
print(mergedList)

