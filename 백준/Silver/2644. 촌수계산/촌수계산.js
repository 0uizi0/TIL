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
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const [a, b] = input.shift().split(" ").map(Number);
const M = +input.shift();
const relations = input.map((v) => v.split(" ").map(Number));

// G (graph)
const G = Array.from(new Array(N + 1), () => []);

relations.map(([u, v]) => {
  G[u].push(v);
  G[v].push(u);
});

G.map((node) => node.sort((a, b) => a - b));

// BFS
function bfs(start, target) {
  const visited = Array(N + 1).fill(false);
  const Q = new Queue();

  Q.enqueue([start, 0]);
  visited[start] = true;

  while (!Q.isEmpty) {
    const [person, depth] = Q.dequeue();
    if (person === target) return depth;

    G[person].forEach((next) => {
      if (!visited[next]) {
        visited[next] = true;
        Q.enqueue([next, depth + 1]);
      }
    });
  }
  return -1;
}

// output
console.log(bfs(a, b));