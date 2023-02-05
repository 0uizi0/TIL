const solution = (n) => {
  const result_list = [];
  for (let i = 1; i < n; i++) {
    Number(n / i) === i ? result_list.push(1) : result_list.push(2);
  }
  return result_list.includes(1) == true ? 1 : 2;
};
