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
        const node = this.root;
        if (!node) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = node => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left === new Node(data);
                        return;
                    } else if (node.left) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
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
        const removeNode = function (node, data) {
            if (!node) {
                return null;
            }
            if (data === node.data) {
                //node has no children
                if (!node.left && !node.right) {
                    return null;
                }
                //node has no left children
                if (!node.left) {
                    return node.right;
                }
                //node has no right children
                if (!node.right) {
                    return node.left;
                }
                //node has two children
                let tempNode = node.right;
                while (tempNode.left) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data)
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    print() {
        let current = this.root;
        while (current) {
            console.log(current.data);
            current = current.right;
        }
    }
}

let bst = new BST;
bst.add(5);
bst.add(10);
bst.add(15);
bst.add(25);
bst.add(35);
bst.remove(25)
bst.isPresent(25);
bst.findMin();
bst.findMax();
bst.print();
