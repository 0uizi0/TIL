const solution = (array) => {
  const result = [];
  result.push([...array].sort((a, b) => b - a)[0]);
  result.push(array.indexOf(result[0]));
  return result;
};
