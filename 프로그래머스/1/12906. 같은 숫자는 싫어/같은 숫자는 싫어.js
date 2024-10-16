function solution(arr) {
  const stack = [];
  for (let el of arr) {
    if (el === stack[stack.length - 1]) stack.pop();
    stack.push(el);
  }
  return stack;
}