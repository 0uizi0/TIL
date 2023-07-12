function solution(my_string, alp) {   
    return [...my_string].map((v)=> {
        if (v.toLowerCase() == alp.toLowerCase()) return v.toUpperCase()
        return v
    }).join('')
}