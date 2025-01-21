# Node Class
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
    
    def set_next(self, node):
        self.next = node

    def get_next(self):
        return self.next
    
    
class LinkedList:

    def __init__(self, head):
        self.head = head

    def print_linked_list(self, head):
        linked_list_formatted = ""
        current_node = head

        linked_list_formatted += f"Node({current_node.value})"
        current_node = current_node.next

        while current_node is not None:
            linked_list_formatted += f" -> Node({current_node.value})"
            current_node = current_node.next

        return linked_list_formatted
    
    def reverse_linked_list(self, head):
        if head is None or head.next is None: 
            return head

        tail = self.reverse_linked_list(head.next)

        head.next.next = head
        head.next = None

        return tail
    
    @staticmethod
    def sorted_merge(node_a, node_b):
        if node_a is None: return node_b
        if node_b is None: return node_a

        if node_a.value < node_b.value:
            node_a.next = LinkedList.sorted_merge(node_a.next, node_b)
            return node_a
        else:
            node_b.next = LinkedList.sorted_merge(node_a, node_b.next)
            return node_b

# first set of nodes
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)
node5 = Node(5)
node8 = Node(8)

# Link the nodes together
node1.set_next(node2)
node2.set_next(node3)
node3.set_next(node4)
node4.set_next(node5)
node5.set_next(node8)

# second set of nodes
node6 = Node(6)
node7 = Node(7)
node9 = Node(9)
node10 = Node(10)
node11 = Node(11)

node6.set_next(node7)
node7.set_next(node9)
node9.set_next(node10)
node10.set_next(node11)

linked_list = LinkedList(node1)

# print("Before Reversing: ", linked_list.print_linked_list(node1))
# linked_list.reverse_linked_list(node1)
# print("After Reversing: ", linked_list.print_linked_list(node6))

print("Before Sorted Merge: ", linked_list.print_linked_list(node1))
LinkedList.sorted_merge(node1, node6)
print("After Sorted Merge: ", linked_list.print_linked_list(node1))

