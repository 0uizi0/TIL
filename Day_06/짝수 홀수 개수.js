const solution = (num_list) => {
  var even = 0,
    odd = 0;
  for (let i in num_list) {
    num_list[i] % 2 == 0 ? even++ : odd++;
  }
  return [even, odd];
};
