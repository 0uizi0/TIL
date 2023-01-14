const solution = (letter) => {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const letter_array = letter.split(" ");
  for (let i in letter_array)
    letter_array[i] = "abcdefghijklmnopqrstuvwxyz"[
      morse.indexOf(letter_array[i])
    ];
  return letter_array.join("");
};
