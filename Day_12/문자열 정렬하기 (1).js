const solution = (my_string) => {
  const result = [];
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i]) == true) result.push(Number(my_string[i]));
  }
  return result.sort((a, b) => a - b);
};
