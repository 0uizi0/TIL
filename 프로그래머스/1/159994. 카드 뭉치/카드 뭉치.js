function solution(cards1, cards2, goal) {
  const resultString = [];
  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) resultString.push(cards1.shift());
    else if (cards2[0] === goal[i]) resultString.push(cards2.shift());
    else return "No";
  }
  return "Yes";
}