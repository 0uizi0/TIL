function solution(num_list) {
    const sum = num_list.reduce((acc,cur) => acc += cur);
    const multi = num_list.reduce((acc,cur) => acc *= cur);
    return num_list.length >= 11 ? sum : multi;
}