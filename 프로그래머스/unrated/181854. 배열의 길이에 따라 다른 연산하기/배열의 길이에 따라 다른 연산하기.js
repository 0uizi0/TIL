function solution(arr, n) {
    if (arr.length % 2 == 0) {
        return arr.map((value, idx) => idx % 2 == 0 ? value : value + n )
    } else {
        return arr.map((value,idx) => idx % 2 == 0 ? value + n : value )
    }
}