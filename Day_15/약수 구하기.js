const solution = (n) => {
  const divisor_list = [];
  for (let i = 1; i < n + 1; i++) {
    if (n % i == 0) {
      divisor_list.push(i);
    }
  }
  return divisor_list;
};
