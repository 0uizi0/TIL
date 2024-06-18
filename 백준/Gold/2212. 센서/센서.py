N = int(input())
K = int(input())
data = list(map(int, input().split()))
data.sort()

# 센서 간 거리 계산 & 내림차순 정렬
distance = list((data[i + 1] - data[i]) for i in range(N - 1))
distance.sort(reverse=True)

result = 0
# 거리의 차들 중에서 가장 큰 값들을 제외하고 더하기
# K개의 그룹으로 나눈다 => (K - 1)개의 차이 제거
for i in range(K - 1, len(distance)):
    result += distance[i]

print(result)