package kata

func Game(n int) []int {
  if n % 2 == 0 {
    return []int{n * n / 2}
  }
  return []int{(n * n - 1) + 1, 2}
}
