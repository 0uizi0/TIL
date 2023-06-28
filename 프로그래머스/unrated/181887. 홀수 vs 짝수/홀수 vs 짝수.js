const solution = (num_list) => {
    const odd = num_list.filter((_,i) => i%2 == 0).reduce((acc, cur) => acc += cur);
    const even = num_list.filter((_,i) => i%2 == 1).reduce((acc, cur) => acc += cur);
    return odd >= even ? odd : even
}