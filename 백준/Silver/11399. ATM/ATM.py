N = int(input())
TOTime = list(map(int, input().split()))
TOTime.sort()
result = 0

for i in range(N):
    result += TOTime[i] * N
    N -= 1

print(result)