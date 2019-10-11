console.clear();

function Node(val, children) {
    this.val = val;
    this.children = children;
};

var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let max = 1;
    let stack = [];
    stack.push(root);

    while (stack.length) {
        let currentNode = stack[stack.length - 1];
        if (currentNode.children.length > 0) {
            let currentChild = currentNode.children.shift();
            stack.push(currentChild);
            if (stack.length > max) {
                max = stack.length;
            }
        } else {
            stack.pop();
        }
    }
    return max;
};

let root = new Node(1, []);
let child1 = new Node(2, []);
let child2 = new Node(3, []);
let child3 = new Node(4, []);
let child4 = new Node(5, []);
let child5 = new Node(6, []);

child2.children.push(child4)
child2.children.push(child5)

root.children.push(child2)
root.children.push(child1)
root.children.push(child3)

// console.log(root)

console.log(maxDepth(root))

// const arr = [1, 2, 3]
// console.log(arr[arr.length - 2])