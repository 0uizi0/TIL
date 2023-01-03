const solution = (array) => {
  array.sort(function (a, b) {
    return a - b;
  });
  const index = Math.floor(array.length / 2);
  return array[index];
};
