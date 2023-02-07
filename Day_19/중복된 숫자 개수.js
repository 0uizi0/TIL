const solution = (array, n) => {
  let result = 0;
  while (array.includes(n) == true) {
    array.splice(array.indexOf(n), 1);
    result++;
  }
  return result;
};
