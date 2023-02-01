const solution = (cipher, code) => {
  const str = cipher.split("");
  const result = [];
  for (let i = code - 1; i < cipher.length; i += code) {
    result.push(str[i]);
  }
  return result.join("");
};
