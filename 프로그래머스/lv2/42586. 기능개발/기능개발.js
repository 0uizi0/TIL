const solution = (progresses, speeds) => {
  const result = [];

  // 작업 시간 구하기
  const workTimes = [];
  for (let i = 0; i < progresses.length; i++) {
    const time = Math.ceil((100 - progresses[i]) / speeds[i]);
    workTimes.push(time);
  }

  // 하루에 배포되는 기능의 개수 구하기
  let cnt = 0;
  let date = workTimes[0];
  for (let i = 0; i < workTimes.length; i++) {
    if (workTimes[i] <= date) {
      cnt++;
    } else {
      date = workTimes[i];
      result.push(cnt);
      cnt = 1;
    }
  }
  result.push(cnt);

  return result;
};