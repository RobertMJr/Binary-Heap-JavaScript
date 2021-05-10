// - Each parent has at most two child nodes.
// - The value of each parent node is always greater than its child nodes.
// - In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
// - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

// An easy way of storing a binary heap is using a list / array
// For any index of an array n...
// - The left child is stored at 2n+1
// - The right child is at 2n+2

// If we have a child node and want to find its parent
// For any child node at index n...
// Its parent is at index (n-1)/2 floored (round down)

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	// Insert a value into the heap
	insert(val) {
		this.values.push(val);
		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];
			if (element <= parent) break;
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}
	// Remove the highest value (the root) from the heap
	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
		}
		const length = this.values.length;
		let parentIdx = 0;
		let parent = this.values[0];
		while (true) {
			let leftChild, rightChild;
			let swap = null;
			let leftChildIdx = 2 * parentIdx + 1;
			let rightChildIdx = 2 * parentIdx + 2;
			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild > parent) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild > parent) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			[ this.values[parentIdx], this.values[swap] ] = [
				this.values[swap],
				this.values[parentIdx]
			];
			parentIdx = swap;
		}
		return max;
	}
}

let heap = new MaxBinaryHeap();
heap.insert(2);
heap.insert(5);
heap.insert(4);
heap.insert(3);
heap.insert(1);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
