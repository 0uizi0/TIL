function solution(rny_string) {
    return [...rny_string].map(v => {
        if (v == 'm') return 'rn'
        return v
    }).join('')
}