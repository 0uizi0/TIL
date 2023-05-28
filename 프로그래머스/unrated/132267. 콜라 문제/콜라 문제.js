const plus = (a, b, empty) => {
    return {
        plus: parseInt(empty/a) * b, 
        failed: empty % a
    }
}

const solution = (a, b, n) => {
    let result = 0
    while (n >= a) {
        var bottles = plus(a,b,n)
        result += bottles.plus
        n = bottles.plus + bottles.failed
    }
    return result
}