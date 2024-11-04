function solution(word) {
  const dictionary = [];

  function dfs(word, len) {
    const MOEMS = [..."AEIOU"];
    if (len === word.length) {
      dictionary.push(word);
      return;
    }
    MOEMS.forEach((m) => dfs(word + m, len));
  }

  for (let i = 1; i <= 5; i += 1) dfs("", i);

  return dictionary.sort().indexOf(word) + 1;
}