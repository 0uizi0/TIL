const solution = (n) => {
  let p = 1;
  while (true) {
    if ((6 * p) % n == 0) {
      return p;
      break;
    }
    p++;
  }
};
