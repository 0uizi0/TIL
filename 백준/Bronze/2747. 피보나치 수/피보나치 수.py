n = int(input())

def recur_fibonacci(num, arr = {}):
    if num <= 1:
        return num
    if num not in arr:
        arr[num] = recur_fibonacci(num - 2) + recur_fibonacci(num - 1)

    return arr[num]

print(recur_fibonacci(n))
