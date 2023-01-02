const solution = (numbers) => {
  for (let i in numbers) {
    numbers[i] *= 2;
  }
  return numbers;
};
