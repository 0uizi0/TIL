import re

def filterStr(str) :
    if (str):
        return True
    return False

def solution(myStr):
    outputs = re.split('a|b|c',myStr)
    result = list(filter(filterStr,outputs))
    return result if len(result) != 0 else ["EMPTY"]