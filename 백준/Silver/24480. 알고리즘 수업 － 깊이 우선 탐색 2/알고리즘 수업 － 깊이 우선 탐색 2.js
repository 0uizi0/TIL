// input
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[N,M,R], ...edges] = fs.readFileSync(filePath).toString().trim().split('\n').map((line)=>line.split(' ').map(Number))

// G (graph)
const G = Array.from(new Array(N+1),()=>[])

edges.map(([u, v]) => {
  G[u].push(v);
  G[v].push(u);
});

G.map((node) => node.sort((a, b) => b - a));

// DFS
const visited = Array(N+1).fill(0);
let visitOrder = 1;

function dfs(node) {
  if (!visited[node]) {
    visited[node] = visitOrder;
    visitOrder++;

    G[node].forEach((next) => dfs(next))
  }
}

dfs(R);

// output
console.log(visited.slice(1).join('\n'));