const solution = (dots) => {
  const x_array = [];
  const y_array = [];
  for (let i in dots) {
    x_array.push(dots[i][0]);
    y_array.push(dots[i][1]);
  }
  const width =
    x_array.sort((a, b) => b - a)[0] - x_array.sort((a, b) => a - b)[0];
  const height =
    y_array.sort((a, b) => b - a)[0] - y_array.sort((a, b) => a - b)[0];
  return width * height;
};
