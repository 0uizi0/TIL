function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i += 1) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const s = stack.pop();
      answer[s] = i - s;
    }
    stack.push(i);
  }

  while (stack.length) {
    const s = stack.pop();
    answer[s] = prices.length - (s + 1);
  }
  return answer;
}