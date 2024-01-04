/** 약수들의 개수 구하기 */
const getDivisorCounts = (n) => {
  let divisors = new Set();
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      divisors.add(i);
      divisors.add(n / i);
    }
  }
  return divisors.size;
};

/** limit과 비교해 조건에 따라 power로 변환하기 */
const convertNum = (n, limit, power) => {
  if (n > limit) return power;
  else return n;
};

/** 변환된 결과값을 더하기 */
const solution = (number, limit, power) => {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    const counts = getDivisorCounts(i);
    const convertedCounts = convertNum(counts, limit, power);
    result += convertedCounts;
  }
  return result;
};
