const solution = (numbers) => {
  const min = [...numbers].sort((a,b)=>a-b);
  const max = [...numbers].sort((a,b)=>b-a);
  return min[0]*min[1] >= max[0]*max[1] ?  min[0]*min[1] : max[0]*max[1];
}