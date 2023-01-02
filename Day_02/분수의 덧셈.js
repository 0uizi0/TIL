let getGCD = (a, b) => (b > 0 ? getGCD(b, a % b) : a);

const solution = (denum1, num1, denum2, num2) => {
  const denum = denum1 * num2 + denum2 * num1;
  const num = num1 * num2;
  const gcd = getGCD(denum, num);
  const result = [denum / gcd, num / gcd];
  return result;
};
