const solution = (my_string, s, e) => {
    const reversed = [...my_string.slice(s,e+1)].reverse().join('');
    return my_string.slice(0,s) + reversed + my_string.slice(e+1,my_string.length)
}