// 소수 판별하기
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 순열 - 만들 수 있는 모든 경우의 수 추출하기
const getNumbers = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getNumbers(rest, num - 1);
    const attached = permutations.map((v) => [fixed, ...v]);
    results.push(...attached);
  });

  return results;
};

const getAllNumbers = (arr) => {
  let results = [];
  arr.forEach((value, index, origin) => {
    results.push(...getNumbers(origin, index + 1));
  });

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