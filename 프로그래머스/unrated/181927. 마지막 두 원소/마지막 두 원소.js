const solution = (num_list) => {
    let final = num_list[num_list.length - 1], 
        prev = num_list[num_list.length - 2]
    final > prev ? num_list.push(final-prev) : num_list.push(final*2)
    return num_list
}