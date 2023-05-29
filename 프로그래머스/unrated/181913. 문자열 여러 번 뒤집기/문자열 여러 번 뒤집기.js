const solution = (my_string, queries) => {
    queries.forEach((query)=>{
        const str = [...my_string], [s,e] = query
        const rep = str.slice(s,e+1).reverse().join('') // 얕은 복사
        str.splice(s,e-s+1,rep) // 깊은 복사
        my_string = str.join('')
    })
    return my_string
}