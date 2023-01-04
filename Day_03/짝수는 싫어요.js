const solution = (n) => {
  const array = [];
  let v = 1;
  while (v <= n) {
    array.push(v);
    v = v + 2;
  }
  return array;
};
