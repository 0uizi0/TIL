function makeAllCase(arr, len) {
  if (len === 1) return arr.map((v) => [v]);

  const result = [];

  arr.forEach((f, i, o) => {
    const rest = [...o.slice(0, i), ...o.slice(i + 1)];
    const cases = makeAllCase(rest, len - 1);
    const newCases = cases.map((el) => [f, ...el]);
    result.push(...newCases);
  });

  return result;
}

function solution(k, dungeons) {
  let maxCount = 0;
  const allCases = makeAllCase(dungeons, dungeons.length);

  allCases.forEach((cases) => {
    let currentK = k;
    let count = 0;

    for (const [r, m] of cases) {
      if (currentK >= r) {
        currentK -= m;
        count += 1;
      }
    }

    maxCount = Math.max(maxCount, count);
  });

  return maxCount;
}