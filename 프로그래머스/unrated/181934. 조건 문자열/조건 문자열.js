const solution = (ineq, eq, n, m) => {
    if ((ineq == '<') && (n < m == true) ) {
        if (n == m && eq !== '=') return 0
        return 1
    } 
    if ((ineq == '>') && (n > m == true)) {
        if (n == m && eq !== '=') return 0
        return 1
    }
    return 0
}