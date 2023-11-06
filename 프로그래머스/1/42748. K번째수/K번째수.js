function solution(array, commands) {
  const result = [];
  for (let cmd of commands) {
    let [i, j, k] = cmd;
    const sortedArr = array.slice(i - 1, j).sort((a, b) => a - b);
    result.push(sortedArr[k - 1]);
  }
  return result;
}