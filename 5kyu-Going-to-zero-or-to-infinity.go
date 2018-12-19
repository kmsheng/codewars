package kata

import "math"

func factorial(n, count int) int {
  sum := 1
  for i := 0; i < count; i++ {
    sum *= (n - i)
  }
  return sum
}

func Going(n int) float64 {
  places := float64(1000000)
  extra := float64(0)
  for i := 1; i <= (n - 1); i++ {
    denominator := float64(factorial(n, i))
    if (denominator > 10000000) {
      break
    }
    extra += float64(1) / denominator
  }
  res := float64(1 + extra)
  return math.Floor(res * places) / places
}
