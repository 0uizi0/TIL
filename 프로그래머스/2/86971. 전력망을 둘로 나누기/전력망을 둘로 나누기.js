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

function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;

  // G (graph)
  const G = Array.from(new Array(n + 1), () => []);

  wires.forEach(([u, v]) => {
    G[u].push(v);
    G[v].push(u);
  });

  // BFS
  const bfs = (start, target) => {
    const visited = Array(n + 1).fill(false);
    const Q = new Queue();
    let count = 0;

    Q.enqueue([start]);
    visited[start] = true;

    while (!Q.isEmpty) {
      let w = Q.dequeue();
      G[w].forEach((next) => {
        if (next !== target && visited[next] === false) {
          visited[next] = true;
          Q.enqueue([next]);
        }
      });
      count += 1;
    }

    return count;
  };

  wires.forEach((next) => {
    let [u, v] = next;
    answer = Math.min(answer, Math.abs(bfs(u, v) - bfs(v, u)));
  });

  return answer;
}