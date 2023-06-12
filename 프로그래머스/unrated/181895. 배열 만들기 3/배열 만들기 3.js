const solution = (arr, intervals) => {
    return intervals.reduce((acc,cur)=>{
        [start, end] = cur
        const filtered = arr.slice(start, end + 1)
        return acc.concat(filtered)
    }, [])
}