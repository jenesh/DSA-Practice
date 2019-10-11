/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let stack = [];
    let leftValStack = [];

    stack.push(root);

    while(stack.length > 0) {
        let curr = stack.pop();

        if (curr.left) {
            stack.push(curr.left);
            leftValStack.push(curr.left.val);
        }
        if (curr.right) {
            stack.push(curr.right);
        }
    }
    console.log(leftValStack)
    return leftValStack.reduce((a, b) => a + b);
};

function TreeNode(val) {
    this.val = val;
    this.right = this.left = null;
}

let root = new TreeNode(3);
let child1 = new TreeNode(9);
let child2 = new TreeNode(20);
let child3 = new TreeNode(15);
let child4 = new TreeNode(7);

child2.left = child3
child2.right = child4

root.left = child1
root.right = child2

// console.log(root)
console.log(sumOfLeftLeaves(root));