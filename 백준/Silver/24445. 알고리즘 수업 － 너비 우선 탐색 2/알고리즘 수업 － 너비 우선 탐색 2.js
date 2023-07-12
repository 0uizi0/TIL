class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  #first;
  #last;
  #length;

  constructor() {
    this.#first = null;
    this.#last = null;
    this.#length = 0;
  }

  isEmpty() {
    return this.#length === 0
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.#first = newNode;
    } else {
      this.#last.next = newNode;
    }
    this.#last = newNode;
    this.#length += 1
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('Queue Empty')
    const deleteNode = this.#first;
    this.#length -= 1;

    if (this.isEmpty()) this.#last = null;
    this.#first = deleteNode.next;

    return deleteNode.data;
  }
}

// input
const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [[N,M,R], ...edges] = fs.readFileSync(filePath).toString().trim().split('\n').map((line)=>line.split(' ').map(Number))

// G (graph)
const G = Array.from(new Array(N),()=>[])

edges.forEach(([u,v]) => {
  G[u-1].push(v-1)
  G[v-1].push(u-1)
})

G.forEach((node) => node.sort((a,b)=>b-a))

// BFS
const visited = new Array(N).fill(0)
const Q = new Queue();

Q.enqueue(R-1)
let visitOrder = 1;

while (!Q.isEmpty()) {
  const cur = Q.dequeue();

  if (!visited[cur]) {
    visited[cur] = visitOrder;
    visitOrder += 1

    G[cur].forEach((next) => {
      if (!visited[next]) Q.enqueue(next)
    })
  }
}

// output
console.log(visited.join('\n'))