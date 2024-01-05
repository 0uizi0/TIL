const solution = (n, m, section) => {
  let result = 0;
  let MAX = 0;
  section.forEach((s) => {
    if (s > MAX) {
      result++;
      MAX = s + m - 1;
    }
  });
  return result;
};