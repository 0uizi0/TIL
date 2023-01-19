const solution = (array, n) => {
  const min = [...array].map((v) => Math.abs(v - n)).sort((a, b) => a - b);
  const cnt = min.filter((element) => min[0] === element).length;
  if (cnt !== 1) {
    return array.indexOf(n - min[0]) === -1 ? Math.abs(min[0] + n) : n - min[0];
  } else {
    return array.indexOf(min[0] + n) === -1 ? Math.abs(min[0] - n) : min[0] + n;
  }
};
