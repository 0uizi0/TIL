N = int(input())
meetings = []

for i in range(N):
    meetings.append(list(map(int, input().split())))

# 두 번째 인덱스 기준으로 오름차순 정렬
meetings.sort(key=lambda x: (x[1], x[0]))

endTime = 0
cnt = 0

# GREEDY
for start, end in meetings:
    if start >= endTime:
        endTime = end
        cnt += 1

print(cnt)