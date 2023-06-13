const solution = (arr) => {
    const start = arr.indexOf(2), 
          end = arr.lastIndexOf(2)
    return start !== -1 ? arr.slice(start, end + 1) : [-1]
}