const solution = (s) => {
  str = s.split("");
  const result = {};
  const alp = [];

  str.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });

  for (let i in str) {
    if (Object.values(result)[i] === 1) {
      alp.push(Object.keys(result)[i]);
    }
  }
  return alp.sort().join("");
};
