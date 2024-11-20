// 소수 판별하기
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 순열 - 만들 수 있는 모든 경우의 수 추출하기
const getNumbers = (arr, len) => {
  if (len === 1) return arr.map((v) => [v]);

  const result = [];

  arr.forEach((f, i, o) => {
    const rest = [...o.slice(0, i), ...o.slice(i + 1)];
    const cases = getNumbers(rest, len - 1);
    const newCases = cases.map((v) => [f, ...v]);
    result.push(...newCases);
  });

  return result;
};

const getAllNumbers = (arr) => {
  let results = [];
  arr.forEach((_, i, o) => results.push(...getNumbers(o, i + 1)));

  return results;
};

function solution(numbers) {
  const output = getAllNumbers([...numbers]);
  const createdNumbers = output.map((v) =>
    v.length === 1 ? Number(v) : Number(v.join(""))
  );
  const filteredNumbers = createdNumbers.filter(
    (v, i) => createdNumbers.indexOf(v) === i && isPrime(v)
  );
  return filteredNumbers.length;
}