const solution = (sides) => {
  return sides.sort((a, b) => b - a)[0] < sides[1] + sides[2] ? 1 : 2;
};
