class Tree:
    def printTree():
        if self.head == None:
            return
        S = Stack()
        S.push(self.head)
        while S.size() > 0:
            t = S.pop
            print(t.value)
            if t.left != None:
                S.push(t.left)
            if t.right != None:
                S.push(t.right)


def printTree2():
    printFromNode(self.head)

def printFromNode(n):
    if n == None:
        return
    S = Stack()

tree = Tree()

# print(tree.printTree())

def PrintTreeRecursive(n):
    if n == None:
        return
    print(n.value)
    PrintTreeRecursive(n.left)
    PrintTreeRecursive(n.rigth)

class Node:
    def __init__(self, value, left, right):
        self.value = value
        self.left = left
        self.right = right

c1 = Node(1, 2, 3)

# print(c1.value)

def printRec(n):
    assert(n != None)
    print(n.value)
    if n.right != None:
        printRec(n.right)
    if n.left != None:
        printRec(n.left)

def sum(a, b):
    if b > a:
        return b
    return a

print(sum(1, 0))

def binarySearchTree(node, val):
    if node == None:
        return False
    if node.val == val:
        return True
    if val < node.val:
        return binarySearchTree(node.left, val)
    else:
        return binarySearchTree(node.right, val)

def treeComplete(n):
    if n == None:
        return True
    if n.left == None && n.right == None:
        return True
    if n.left != None && n.right != None:
        return treeComplete(n.left) && treeComplete(n.right)
        # a = treeComplete(n.left)
        # b = treeComplete(n.left)
        # return a && b
    else:
        return False

def FindLargetsTree(n):
    if n == None:
        return MIN_INT
    S = Stack()
    currentMax = n.value
    S.push(n)
    while S.size() > 0:
        t = S.pop()
        currentMax = max(currentMax, t.value)
    if t.left != None:
        S.push(t.left)
    if t.right != None:
        S.push(t.right)
    return currentMax


def FindLargest(n):
    if n == None:
        return MIN_INT
    leftLargest = FindLargest(n.left)
    rightLargest = FindLargest(n.right)
    return max(n.value, max(leftLargest, rightLargest))

