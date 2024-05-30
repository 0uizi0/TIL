def solution(array):
    result = 0
    maxNum = 0

    for n in array:
        # array에 포함된 요소 n의 개수 세기
        currentCnt = array.count(n)

        # 최빈값 구하기. 최빈값이 여러 개면 result 값은 -1 
        if (currentCnt == array.count(maxNum) and n != maxNum):
            result = -1
        elif currentCnt > array.count(maxNum):
            result = n
            maxNum = n
    
    return result