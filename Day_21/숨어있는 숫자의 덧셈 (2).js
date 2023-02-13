const solution = (my_string) => {
  if (my_string.match(/\d+/g) == null) {
    return 0;
  } else {
    let result = 0;
    for (let i of my_string.match(/\d+/g)) {
      result += Number(i);
    }
    return result;
  }
};
