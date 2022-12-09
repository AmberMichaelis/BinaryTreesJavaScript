class TreeNode {
    #data;
    #left;
    #right;
    constructor(data) {
        this.#data = data
    }

    getData() {
        console.log(this.#data);
        return this.#data;
    }

    getLeft() {
        console.log(this.#left);
        return this.#left;
    }

    getRight() {
        console.log(this.#right);
        return this.#right;
    }

    setData(data) {
        console.log(`Data set to ${this.#data}`);
        this.#data = data;
    }

    setLeft(data) {
        this.#left = data;
        console.log(`Left data set to ${this.#left}`);
    }

    setRight(data) {
        this.#right = data;
        console.log(`Right data set to ${this.#right}`);
    }
}

let node = new TreeNode(5);
node.setData(6)
node.setLeft(3);
node.setRight(9);
node.getData();
node.getLeft();
node.getRight();
