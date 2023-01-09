const solution = (my_string, n) => {
  const string_arr = my_string.split("");
  for (let i in string_arr) {
    string_arr[i] = string_arr[i].repeat(n);
  }
  return string_arr.join("");
};
