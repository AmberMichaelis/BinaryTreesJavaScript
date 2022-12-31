class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(value) {
        if (!value) throw new Error('Data cannot be null')
        this.root = this.#addHelper(this.root, value);
    }

    #addHelper(node, value) {
        if (!node) {
            return new Node(value);
        }
        if (value < node.value) {
            node.left = this.#addHelper(node.left, value);
        } else if (value > node.value) {
            node.right = this.#addHelper(node.right, value);
        } else {
            return node;
        }
        return node;
    }

    find(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                console.log('true')
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            }
        }
        console.log('false')
        return false;
    }
}

let bst = new BST;
bst.add(10);
bst.find(10);
bst.find(5);
