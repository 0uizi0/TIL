const solution = (slice, n) => {
  let p = 1;
  while (true) {
    if (slice * p >= n) {
      return p;
      break;
    }
    p++;
  }
  return slice * p;
};
