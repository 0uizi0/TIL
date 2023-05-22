const solution = (num_list) => {
   const even = num_list.filter((el) => Number.isInteger(el/2)).join('')
   const odd = num_list.filter((el) => !Number.isInteger(el/2)).join('')
   return Number(even) + Number(odd)
}