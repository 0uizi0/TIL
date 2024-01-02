/** 에라토스테네스의 체 알고리즘 */
const isPrimeAlgorithm = (n) => {
  let arr = Array(n+1).fill(true).fill(false,0,2) // 0,1은 false로 초기화
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false
      }
    }
  }
  return arr
}

const solution = (n) => {
  let isPrimes = isPrimeAlgorithm(n)
  return isPrimes.filter(e => e === true).length
}
