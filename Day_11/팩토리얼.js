const factorial = (num) => {
  let a = 1;
  for (let i = 1; i <= num; i++) a *= i;
  return a;
};
const solution = (n) => {
  let result = 1;
  while (factorial(result + 1) <= n) result++;
  return result;
};
