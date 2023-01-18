const solution = (s) => {
  let result = 0;
  const str = s.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] !== "Z"
      ? (result += Number(str[i]))
      : (result -= Number(str[i - 1]));
  }
  return result;
};
