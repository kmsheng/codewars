package kata

func Cycle(n int) int {
  if n == 1 {
    return -1
  }
  if n % 2 == 0 || n % 5 == 0 {
    return -1
  }
  dividend := 10
  arr := []int{}
  m := make(map[int]bool)

  for len(arr) < n {

    division := dividend / n
    remainder := dividend % n

    if division == 0 {
      dividend = dividend * 10
    } else if division > 0 {
      if remainder == 0 {
        break
      }
      dividend = remainder * 10
    }
    if m[remainder] {
      return len(arr)
    }
    arr = append(arr, remainder)
    m[remainder] = true
  }
  return -1
}
