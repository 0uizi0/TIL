const solution = (quiz) => {
  const result = [];
  for (let i in quiz) {
    eval(quiz[i].split("=")[0]) === eval(quiz[i].split("=")[1])
      ? result.push("O")
      : result.push("X");
  }
  return result;
};
