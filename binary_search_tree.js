class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        if (!data) throw new Error('Data cannot be null');
        this.root = this.#addHelper(this.root, data);
    }

    #addHelper(node, data) {
        if (!node) {
            return new Node(data);
        }
        if (data < node.data) {
            node.left = this.#addHelper(node.left, data);
        } else if (data > node.data) {
            node.right = this.#addHelper(node.right, data);
        } else {
            return node;
        }
        return node;
    }

    findMax() {
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        console.log(`Max is: ${current.data}`)
        return current.data;
    }

    findMin() {
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        console.log(`Min is: ${current.data}`);
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (!current) return null;
        }
        console.log(`Found: ${current}`);
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                console.log(`${data} is present`)
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        console.log(`${data} is not present`);
        return false;
    }

    remove(data) {
        this.root = this.#removeHelper(this.root, data);
    }

    #removeHelper(current, data) {
        if (!current) {
            return null;
        }
        if (data === current.data) {
            if (!current.left && !current.right) {
                return null;
            }
            if (!current.right) {
                return current.left;
            }
            if (!current.left) {
                return current.right;
            }
            let smallestValue = this.#findSmallestValue(current.right);
            current.data = smallestValue;
            current.right = this.#removeHelper(current.right, smallestValue);
            return current;
        }
        if (data < current.data) {
            current.left = this.#removeHelper(current.left, data);
            return current;
        }
        current.right = this.#removeHelper(current.right, data);
        return current;
    }

    #findSmallestValue(node) {
        return !node.left ? node.data : this.#findSmallestValue(node.left);
    }

    // levels between root and first node without two children
    findMinHeight(node = this.root) {
        if (!node) return -1;
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    // distance from root to most bottom node
    findMaxHeight(node = this.root) {
        if (!node) return -1;
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    // if true, difference between min height and max height will be 0 or 1
    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    inOrder() {
        if (!this.root) {
            return null;
        } else {
            let result = [];
            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left); // if node.left exists then run traverseInOrder on node.left
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            console.log(`In Order: ` + result)
            return result;
        };
    }

    preOrder() {
        if (!this.root) {
            return null;
        } else {
            let result = [];
            function traversePreOrder(node) {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            console.log(`Pre Order: ` + result)
            return result;
        }
    }

    postOrder() {
        if (!this.root) {
            return null;
        } else {
            let result = [];
            function traversePreOrder(node) {
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
                result.push(node.data);
            };
            traversePreOrder(this.root);
            console.log(`Post Order: ` + result)
            return result;
        }
    }

    levelOrder() {
        let result = [];
        let queue = [];
        if (this.root) {
            queue.push(this.root);
            while (queue.length > 0) {
                let node = queue.shift();
                result.push(node.data);
                if (node.left) {
                    queue.push(node.left);
                };
                if (node.right) {
                    queue.push(node.right);
                }
            };
            console.log(`Level Order: ` + result)
            return result;
        } else {
            return null;
        }
    }
}

let bst = new BST;
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.add(10);
bst.remove(9);
bst.isPresent(9);
bst.remove(3);
bst.isPresent(3);
bst.remove(4);
bst.isPresent(4);
bst.remove(7);
bst.isPresent(7);
bst.inOrder();
bst.preOrder();
bst.postOrder();
bst.levelOrder();

