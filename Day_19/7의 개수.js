const solution = (array) => {
  let result = 0;
  for (let i in array) {
    const newArray = array[i].toString().split("");
    for (let j in newArray) {
      if (newArray[j].includes("7") === true) {
        result++;
      }
    }
  }
  return result;
};
