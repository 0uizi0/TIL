function solution(citations) {
  citations.sort((a, b) => b - a); // citations 배열을 내림차순으로 정렬

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) {
      return i;
    }
  }

  return citations.length; // 모든 논문이 인용된 횟수보다 많을 경우
}
