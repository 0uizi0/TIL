function solution(babbling) {
  const POSSIBLE = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  babbling.forEach((bab) => {
    for (let i = 0; i < POSSIBLE.length; i++) {
      if (bab.includes(POSSIBLE[i].repeat(2))) {
        break;
      }
      bab = bab.split(POSSIBLE[i]).join(" ");
    }
    if (bab.split(" ").join("").length === 0) {
      answer++;
    }
  });
  return answer;
}