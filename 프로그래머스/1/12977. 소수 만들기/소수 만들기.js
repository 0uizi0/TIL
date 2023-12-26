/** 조합 구하기 */
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

/** 소수 판별하기 */
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = (nums) => {
  const N = 3; // 더하고자 하는 숫자 N

  // 1. 조합 만들기
  const combinations = getCombinations(nums, N);

  // 2. 조합된 숫자 더하기
  const sumOfCombinations = [];
  combinations.forEach((combi) => {
    const result = combi.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    sumOfCombinations.push(result);
  });


  // 3. 소수인 결과만 담은 배열 만들기
  const primeArr = sumOfCombinations.filter((sum) => isPrime(sum) === true);
  
  return primeArr.length
};