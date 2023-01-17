const solution = (n) => {
  const divisor = [];
  const compositeNum = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j == 0 && divisor.indexOf(i) == -1) {
        divisor.push(j);
      }
    }
    if (divisor.length > 2) compositeNum.push(i);
    divisor.length = 0;
  }
  return compositeNum.length;
};
