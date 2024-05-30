def solution(array):
    array.sort()
    midIdx = len(array) // 2
    return array[midIdx]