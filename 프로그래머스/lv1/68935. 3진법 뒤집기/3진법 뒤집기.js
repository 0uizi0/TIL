const solution = (n) => {
    const reversal = [...(n.toString(3))].reverse().join('')
    return parseInt(reversal,3)
}