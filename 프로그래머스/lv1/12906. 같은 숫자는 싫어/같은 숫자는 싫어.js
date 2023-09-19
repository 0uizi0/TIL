const solution = (arr) => {
  const stack = [];
  arr.forEach((el, index) => {
    stack.push(el);
    if (arr[index - 1] == el) stack.pop();
  });
  return stack;
};
