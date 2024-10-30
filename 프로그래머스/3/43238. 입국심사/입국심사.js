function solution(n, times) {
  let l = 1;
  let r = n * Math.max(...times);

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const completedCnt = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    completedCnt >= n ? (r = mid - 1) : (l = mid + 1);
  }
  return l;
}