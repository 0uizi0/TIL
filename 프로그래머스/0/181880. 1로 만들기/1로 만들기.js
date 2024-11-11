function solution(num_list) {
  let result = 0;
  num_list.forEach((n) => {
    while (n !== 1) {
      if (n % 2) n = (n - 1) / 2;
      else n /= 2;
      result += 1;
    }
  });
  return result;
}