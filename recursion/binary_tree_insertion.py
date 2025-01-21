class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            self.insert_node(self.root, value)

    def insert_node(self, root, value):
        if(root is None):
            node = Node(value)
            return node
        
        if(value < root.value):
            root.left = self.insert_node(root.left, value)
        else:
            root.right = self.insert_node(root.right, value)
        
        return root
    
    def print_leaf_nodes(self, root):
        left_leaf, right_leaf = None, None

        if self.root is None:
            return 
        
        if root.left is None and root.right is None:
            return root.value
        
        if root.left is not None:
            left_leaf = self.print_leaf_nodes(root.left)
        if root.right is not Node:
            right_leaf = self.print_leaf_nodes(root.right)

        
        return f"{left_leaf}, {right_leaf}"


        


# Create a sample tree manually
tree = BinaryTree()
tree.root = Node(5)
tree.root.left = Node(3)
tree.root.right = Node(7)
tree.root.left.left = Node(1)
tree.root.left.right = Node(4)
tree.root.right.left = Node(6)
tree.root.right.right = Node(8)

tree.insert(9)
print("Leaf nodes: ", tree.print_leaf_nodes(tree.root))
