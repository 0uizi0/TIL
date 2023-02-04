const solution = (num, k) => {
  const num_list = num
    .toString()
    .split("")
    .map((v) => Number(v));
  return num_list.indexOf(k) !== -1 ? num_list.indexOf(k) + 1 : -1;
};
