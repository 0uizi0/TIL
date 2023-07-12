function solution(myString) {
    const result = [...myString].map((v)=>{
        if (v == 'a') return 'A'
        if (v == v.toUpperCase() && v !== 'A') return v.toLowerCase()
        return v
    });
    return result.join('')
}