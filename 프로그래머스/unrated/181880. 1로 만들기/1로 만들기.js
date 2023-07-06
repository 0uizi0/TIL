function solution(num_list) {
    let result = 0;
    num_list.forEach((el) => {
        let cnt = 0;
        while(el !== 1) {
            el = el%2 == 0 ? el/2 : (el-1)/2
            cnt++;
        }
        result += cnt
    })
    return result
}