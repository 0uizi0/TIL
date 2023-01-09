const solution = (num_list) => {
  const result_list = [];
  for (let i = num_list.length; i > 0; i--) {
    result_list.push(num_list[i - 1]);
  }
  return result_list;
};
