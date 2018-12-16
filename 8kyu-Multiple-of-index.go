package kata

func multipleOfIndex (ints []int) []int {
  res := []int{}
  for i, num := range ints {
    if (i != 0) && (num % i == 0) {
      res = append(res, num)
    }
  }
  return res
}
