def solution(pr):
    if pr >= 100000 and pr < 300000:
        return int(pr * 0.95)
    elif pr >= 300000 and pr < 500000:
        return int(pr * 0.9)
    elif pr >= 500000:
        return int(pr * 0.8)
    else:
        return int(pr)