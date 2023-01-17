const solution = (my_string) => {
  const str = my_string.split("");
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      str.splice(i, 1);
      i--;
    }
  }
  return str.join("");
};
