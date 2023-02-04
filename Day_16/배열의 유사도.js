const solution = (s1, s2) => {
  let result = 0;
  for (let i in s1) {
    if (s2.indexOf(s1[i]) !== -1) {
      result++;
    }
  }
  return result;
};
