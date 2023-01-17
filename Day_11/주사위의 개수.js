const solution = (box, n) => {
  let result = 1;
  for (let i in box) result *= Math.floor(box[i] / n);
  return result;
};
