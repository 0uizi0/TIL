// input
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const locationOfFans = input[input.length - 1].split(" ").map(Number);
const setOfLocation = new Set(locationOfFans);

// G (graph)
const G = Array.from(new Array(N + 1), () => []);
for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  G[u].push(v);
}

// DFS
const dfs = (graph, start) => {
  const stack = [start];

  while (stack.length) {
    const cur = stack.pop();

    if (setOfLocation.has(cur)) continue;

    if (!graph[cur].length) return true;

    G[cur].forEach((next) => stack.push(next))
  }

  return false;
};

// output
console.log(dfs(G,1) ? "yes": "Yes")