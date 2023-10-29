/** 숫자를 문자열로 변환하여 비교 */
function compare(x, y) {
  return (y + x) - (x + y);
}

function solution(numbers) {
  let stringNumbers = numbers.map(String);
  stringNumbers.sort(compare);
  
  let answer = stringNumbers.join('');

  return answer[0] === '0' ? '0' : answer;
}