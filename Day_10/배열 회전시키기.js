const solution = (numbers, direction) => {
  const result = numbers.slice();
  if (direction == "right") {
    result.pop(0);
    result.unshift(numbers[numbers.length - 1]);
  } else if (direction == "left") {
    result.shift(0);
    result.push(numbers[0]);
  }
  return result;
};
