const solution = (my_string) =>
  my_string
    .match(/\d/g)
    .map((v) => Number(v))
    .reduce((acc, v) => acc + v);
