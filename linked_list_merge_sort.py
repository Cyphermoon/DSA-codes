from linkedList import LinkedList


def merge_sort(linkedList:LinkedList):
    """
    This is a merge sort algorithm for a linkedList:

    -Recursively divide the linked list
    -sort each list back up
    """

    if linkedList.size() == 1:
        return linkedList
    elif linkedList.head is None:
        return linkedList
    
    l, r = split(linkedList)

    left = merge_sort(l)
    r = merge_sort(r)

    return merge(left, right)


def split(linkedList:LinkedList):
    """
    Splits a linked list from the middle into two sub-linked-list 
    """

    if linkedList is None or linkedList.head is None:
        left = linkedList
        right = None

        return left, right
    
    else:
        size = linkedList.size()
        mid = size // 2
        mid_node = linkedList.getNode(mid - 1)

        right = mid_node.next
        

        mid_node.next = None
        left = self.head

        return left, right


def merge(left:LinkedList, right:LinkedList):
    """
    Sorts data from two list and return a new sorted linked list
    """
    output = LinkedList(0)
    left_head = left.head
    right_head = right.head 

    while left_head or right_head:
        if left_head is None:
            output.append(right_head)
            left_head = left_head.next
        elif right_head is None:
            output.append(left_head)
            right_head = right_head.next
        else:
            left_data = left_head.value
            right_data = right_head.value

            if(left_data < right_data):
                output.append(left_head)
                left_head = left_head.next
            else:
                output.append(right_head)
                right_head = right_head.next
        
    output = output.next
    return output


