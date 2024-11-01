class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex += 1;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex += 1;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  get length() {
    return this.tailIndex - this.headIndex;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

// input
const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [[N, M, R], ...edges] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

// G (graph)
const G = Array.from(new Array(N + 1), () => []);

edges.forEach(([u, v]) => {
  G[u].push(v);
  G[v].push(u);
});

G.forEach((node) => node.sort((a, b) => a - b));

// BFS
const visited = new Array(N + 1).fill(0);
const Q = new Queue();

Q.enqueue(R);
let visitOrder = 1;

while (!Q.isEmpty) {
  const cur = Q.dequeue();

  if (!visited[cur]) {
    visited[cur] = visitOrder;
    visitOrder += 1;

    G[cur].forEach((next) => {
      if (!visited[next]) Q.enqueue(next);
    });
  }
}

// output
console.log(visited.slice(1).join("\n"));