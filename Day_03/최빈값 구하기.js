function getKeyByValue(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

const solution = (array) => {
  const cnt = {};
  for (let i in array) {
    let value = array[i];
    value in cnt ? cnt[value]++ : (cnt[value] = 1);
  }
  const values = Object.values(cnt).sort((a, b) => a - b);
  const maxValue = Math.max(...values);
  let v = values.filter((element) => maxValue === element).length;
  return v == 1 ? parseInt(getKeyByValue(cnt, maxValue)) : -1;
};
