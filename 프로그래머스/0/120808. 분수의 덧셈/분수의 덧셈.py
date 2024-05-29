from fractions import Fraction

def solution(n1, d1, n2, d2):
  # Fraction으로 사칙연산
  resultFraction = Fraction(n1,d1) + Fraction(n2,d2)

  # 분자 분모 분리하여 출력
  return [resultFraction.numerator, resultFraction.denominator]