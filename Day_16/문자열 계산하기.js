const solution = (my_string) => {
  const str = my_string.split(" ");
  let result = Number(str[0]);
  for (let i = 1; i <= str.length; i += 2) {
    if (str[i] === "+") {
      result += Number(str[i + 1]);
    } else if (str[i] === "-") {
      result -= Number(str[i + 1]);
    }
  }
  return result;
};
