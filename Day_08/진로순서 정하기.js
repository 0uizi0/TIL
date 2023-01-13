const solution = (emergency) => {
  const array = [...emergency];
  array.sort(function (a, b) {
    return b - a;
  });
  for (let i in emergency) emergency[i] = array.indexOf(emergency[i]) + 1;
  return emergency;
};
