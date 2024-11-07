// input
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, M, K, X] = input.shift().split(" ").map(Number);
const roads = input.map((v) => v.split(" ").map(Number));
const distance = Array(N + 1).fill(0);
let answer = [];

// G (graph)
const G = Array.from(new Array(N + 1), () => []);
roads.map(([u, v]) => G[u].push(v));

// BFS
function bfs(start) {
  const queue = [start];
  distance[start] = 1;

  while (queue.length) {
    const cur = queue.shift();
    if (distance[cur] === K + 1) answer.push(cur);
    G[cur].forEach((next) => {
      if (!distance[next]) {
        queue.push(next);
        distance[next] = distance[cur] + 1;
      }
    });
  }
}
bfs(X);

answer = !answer.length ? -1 : answer.sort((a, b) => a - b).join("\n");
console.log(answer);