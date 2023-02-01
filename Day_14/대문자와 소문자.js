const solution = (my_string) => {
  const str = my_string.split("");
  for (let i in str) {
    str[i] === str[i].toUpperCase()
      ? (str[i] = str[i].toLowerCase())
      : (str[i] = str[i].toUpperCase());
  }
  return str.join("");
};
