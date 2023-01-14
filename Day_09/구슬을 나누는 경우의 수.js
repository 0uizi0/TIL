const factorial = (n) => {
  let multi = BigInt(1);
  for (let i = 1; i <= n; i++) multi *= BigInt(i);
  return multi;
};

const solution = (balls, share) =>
  parseInt(factorial(balls) / (factorial(balls - share) * factorial(share)));
