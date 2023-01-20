const solution = (order) => {
  let cnt = 0;
  const str = order.toString().split("");
  for (let i in str) {
    str[i] == "3" || str[i] == "6" || str[i] == "9" ? cnt++ : (cnt += 0);
  }
  return cnt;
};
