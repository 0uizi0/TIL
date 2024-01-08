/** 실패율 구하기 */
const getFailureRate = (stages, stage) => {
  const challengers = stages.filter((s) => s >= stage);
  const losers = challengers.filter((s) => s <= stage);
  return losers.length / challengers.length;
};

const solution = (N, stages) => {
  const rates = [];
  for (let i = 1; i <= N; i++) {
    rates.push([i, getFailureRate(stages, i)]);
  }
  const sortedRates = rates.sort((a, b) => {
    if (a[1] === b[1])
      return a[0] - b[0]; // 실패율이 같다면, 작은 번호의 스테이지가 먼저 오도록
    else return b[1] - a[1]; // 실패율이 높은 순으로 내림차순
  });
  const result = sortedRates.map((r) => r[0]);
  return result;
};