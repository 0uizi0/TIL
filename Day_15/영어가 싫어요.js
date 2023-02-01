const solution = (numbers) => {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i in num) {
    numbers = numbers.split(num[i]).join(i);
  }
  return Number(numbers);
};
