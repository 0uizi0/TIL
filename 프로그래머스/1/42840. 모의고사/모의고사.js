function solution(answers) {
  const patterns = ["12345", "21232425", "3311224455"];
  const scores = patterns.map(
    (p) => answers.filter((a, i) => a == p[i % p.length]).length
  );
  const maxScore = Math.max(...scores);

  return scores.map((s, i) => (s === maxScore ? i + 1 : null)).filter(Boolean);
}