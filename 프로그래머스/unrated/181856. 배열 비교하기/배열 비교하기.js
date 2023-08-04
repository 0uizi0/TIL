function solution(arr1, arr2) {
    let arr1Sum = arr1.reduce((acc,cur)=>acc+=cur,0), 
        arr2Sum = arr2.reduce((acc,cur)=>acc+=cur, 0);
    if (arr1.length > arr2.length) return 1
    if (arr2.length > arr1.length) return -1
    return arr1Sum === arr2Sum ? 0 : arr1Sum > arr2Sum ? 1 : -1
}