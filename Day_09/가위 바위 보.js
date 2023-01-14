const solution = (rsp) => {
  const str = rsp.split("");
  for (let i in str)
    str[i] == "2"
      ? (str[i] = "0")
      : str[i] == "0"
      ? (str[i] = "5")
      : (str[i] = "2");
  return str.join("");
};
