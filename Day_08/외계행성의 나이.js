const solution = (age) => {
  const alp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const age_array = age.toString().split("");
  for (let i in age_array) {
    age_array[i] = alp[parseInt(age_array[i])];
  }
  return age_array.join("");
};
