const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

class MinHeap {
  #arr;

  constructor(els) {
    this.#arr = els ?? [];
  }

  enq(el) {
    this.#arr.push(el);

    let curIdx = this.#arr.length - 1;
    let parIdx = Math.floor((curIdx - 1) / 2);

    while (curIdx > 0 && this.#arr[parIdx] > this.#arr[curIdx]) {
      this._swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = Math.floor((curIdx - 1) / 2);
    }
  }

  deq() {
    if (this.#arr.length === 0) return null;
    if (this.#arr.length === 1) return this.#arr.pop();

    const originRoot = this.#arr[0];
    this.#arr[0] = this.#arr.pop();
    let curIdx = 0;

    while (curIdx * 2 + 1 < this.#arr.length) {
      let childIdx =
        curIdx * 2 + 2 < this.#arr.length &&
        this.#arr[curIdx * 2 + 2] < this.#arr[curIdx * 2 + 1]
          ? curIdx * 2 + 2
          : curIdx * 2 + 1;

      if (this.#arr[curIdx] < this.#arr[childIdx]) {
        break;
      }

      this._swap(curIdx, childIdx);
      curIdx = childIdx;
    }
    return originRoot;
  }

  _swap(a, b) {
    const tmp = this.#arr[a];
    this.#arr[a] = this.#arr[b];
    this.#arr[b] = tmp;
  }

  get size() {
    return this.#arr.length;
  }

  get peek() {
    return this.#arr[0];
  }
}

const minHeap = new MinHeap();

const sorted = arr.sort((a, b) => a[1] - b[1]);

sorted.forEach(([_, s, t]) => {
  if (minHeap.size === 0) minHeap.enq(t);
  else {
    const head = minHeap.peek;
    if (s >= head) minHeap.deq();
    minHeap.enq(t);
  }
});

console.log(minHeap.size);