const solution = (numbers, n) => {
    let sum = 0, i = 0;
    while (sum <= n) {
        sum += numbers[i]
        i++
    }
    return sum
}