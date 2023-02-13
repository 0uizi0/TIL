const solution = (polynomial) => {
  let str = polynomial.split(" + ");
  let variable = 0,
    constant = 0;
  for (let i in str) {
    if (str[i].includes("x") == true) {
      if (str[i] == "x") {
        str[i] = "1x";
      }
      variable += Number(str[i].split("x")[0]);
    } else {
      constant += Number(str[i]);
    }
  }
  if (constant == 0) {
    return variable == 0 ? "0" : variable == 1 ? "x" : variable + "x";
  } else {
    return variable == 0
      ? constant.toString()
      : variable == 1
      ? "x + " + constant
      : variable + "x + " + constant;
  }
};
