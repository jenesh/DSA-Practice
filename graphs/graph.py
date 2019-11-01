def demo():
    n = Node(4)
    n.children = [] # Empty List
    m = Node(5)
    n.children.append(m)
    n.children[0] = m

    k
    n.children[1] = k


def DFSTree (Node root):
    if root === None:
        return
    s = Stack()
    s.push(root)
    while s.size() > 0:
        t = s.pop()
        print(t.value)
        for c in t.children:
            s.push(c)


def DFSGraph (Node root):
    if root === None:
        return
    s = Stack()
    s.push(root)
    seen = Set()
    while s.size() > 0:
        t = s.pop()
        if seen.contains(t.value):
            continue
        seen.insert(t)
        print(t.value)
        for c in t.neighbour:
            # if seen.contains(t.value): # Wouldn't flood the Stack
            #     continue
            # seen.insert(t)
            s.push(c)


class Graph
    nodes

seen = Set()
for n in Nodes:
    if seen.contains(n)
        continue
    DFSGraph(n, seen)



Nodes N

def ShortestPath (s, t):
    CostToReach = {}
    for n in N:
        CostToReach[n] = INT_MAX # -1 Assuming all the cost is positive / Infinity
    CostToReach[s] = 0
    R = Stack()
    R.append(S)
    while R.size() > 0:
        x = R.pop()
        for y in x.neighbours:
            c = CostToReach[x] + weight[x][y]
            if c < CostToReach[y]:
                CostToReach[y] = c
                R.push(y)
                # for z in y.neightbors:
                #     R.push(z)

