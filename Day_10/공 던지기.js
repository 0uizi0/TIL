const solution = (numbers, k) => {
  let index = 0;
  for (let i = 0; i < k; i++) {
    index += 2;
    index > numbers.length ? (index -= numbers.length) : (index -= 0);
  }
  return numbers[index - 2];
};
