const solution = (phone_number) => {
    const arr = [...phone_number]
    const start = arr.splice(0, arr.length - 4).map((el) => "*")
    return start.join('') + arr.join('')
}