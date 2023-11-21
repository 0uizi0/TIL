function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    const box = score.slice(i, i + m);
    if (box.length === m) {
      const min = box[box.length - 1];
      result += min * m;
    }
  }
  return result;
}
