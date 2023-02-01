const solution = (my_string, num1, num2) => {
  const str = my_string.split("");
  const newStr = [...str];
  newStr[num1] = str[num2];
  newStr[num2] = str[num1];
  return newStr.join("");
};
