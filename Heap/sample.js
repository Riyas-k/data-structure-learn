class MaxHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[idx] <= this.values[parentIdx]) break;
      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx],
      ];
      idx = parentIdx;
    }
  }
  remove(value) {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    let removed = this.values.pop();
    let idx = 0;
    while (true) {
      let leftIdx = 2 * idx + 1;
      let leftValue = this.values[leftIdx];
      let rightIdx = 2 * idx + 2;
      let rightValue = this.values[rightIdx];
      let largestIdx = null;
      if (leftIdx && leftValue > this.values[idx]) {
        largestIdx = leftIdx;
      } else {
        largestIdx = idx;
      }
      if (rightIdx && rightValue < this.values[idx]) {
        largestIdx = rightIdx;
      }
      if (largestIdx == idx) break;
      [this.values[idx], this.values[largestIdx]] = [
        this.values[largestIdx],
        this.values[idx],
      ];
      idx = largestIdx;
    }
    return removed;
  }
  heapSort(heap) {
    let sorted = [];
    while (this.values.length > 0) {
      sorted.push(this.remove());
    }
    console.log(sorted);
  }
}
let heap = new MaxHeap();
heap.insert(55);
heap.insert(200);
heap.insert(100);
heap.insert(300);
heap.insert(400);
heap.insert(600);
heap.insert(750);
// heap.remove();
// heap.remove();
heap.heapSort(heap)
// console.log(heap);

