# 데이터 입력받기
N = int(input())
li = []
for _ in range(N):
    line = list(map(int, input().split()))
    li.append(line)

# 완전탐색
def pooling(size, x, y):
    mid = size // 2
    if (mid == 1):
        answer = [li[x][y], li[x+1][y], li[x][y+1], li[x+1][y+1]]
        answer.sort()
        return answer[-2]
    lt = pooling(mid, x, y)
    rt = pooling(mid, x+mid, y)
    lb = pooling(mid, x, y+mid)
    rb = pooling(mid, x+mid, y+mid)
    answer = [lt, rt, lb, rb]
    answer.sort()
    return answer[-2]


print(pooling(N, 0, 0))
