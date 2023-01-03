class Heap {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    insert(value) {
        this.items[this.size++] = value;
        this.#bubbleUp();
        console.log(`Added ${value} to `, this.items);
    }

    #bubbleUp() {
        let index = this.size - 1;
        while (index > 0 && this.items[index] > this.items[this.#parent(index)]) {
            this.#swap(index, this.#parent(index));
            index = this.#parent(index);
        }
    }

    #swap(first, second) {
        let temp = this.items[first];
        this.items[first] = this.items[second];
        this.items[second] = temp;
    }

    #parent(index) {
        return Math.floor((index - 1) / 2);
    }

    remove() {
        if (this.isEmpty()) throw new Error('Heap is empty.')
        let removed = this.items[0];
        this.items[0] = this.items[--this.size];
        this.#bubbleDown();
        console.log(`Removed ${removed} | Heap: ${this.items}`)
        return removed;
    }

    #bubbleDown() {
        var index = 0;
        while (index <= this.size && !this.#isValidParent(index)) {
            var largerChildIndex = this.#largerChildIndex(index);
            this.#swap(index, largerChildIndex);
            index = largerChildIndex;
        }
    }

    #largerChildIndex(index) {
        // Has no children
        if (!this.#hasLeftChild(index)) return index;
        // Has only a left child
        if (this.#hasRightChild(index)) return this.#leftChildIndex(index);
        // Has two children
        return (this.#leftChild(index) > this.#rightChild(index)) ? this.#leftChildIndex(index) : this.#rightChildIndex(index);
    }

    #hasLeftChild(index) {
        return this.#leftChildIndex(index) <= this.size;
    }

    #hasRightChild(index) {
        return this.#rightChildIndex(index) <= this.size;
    }

    #isValidParent(index) {
        // Has no children
        if (!this.#hasLeftChild(index)) {
            return true;
        }
        var isValid = this.items[index] >= this.#leftChild(index);
        // Has two children
        if (this.#hasRightChild(index)) {
            isValid &= this.items[index] >= this.#rightChild(index)
        }
        return isValid;
    }

    #leftChild(index) {
        return this.items[this.#leftChildIndex(index)]
    }

    #rightChild(index) {
        return this.items[this.#rightChildIndex(index)]
    }

    #leftChildIndex(index) {
        return index * 2 + 1;
    }

    #rightChildIndex(index) {
        return index * 2 + 2;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        console.log(`Size: ${this.size}`)
        return this.size
    }
}

let heap = new Heap;
heap.insert(5);
heap.insert(15);
heap.insert(1);
heap.insert(17);
heap.insert(3);
heap.insert(30);
heap.insert(13);
heap.insert(20);
heap.insert(42);
heap.insert(2);
heap.remove()
heap.getSize();
