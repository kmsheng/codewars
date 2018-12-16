package kata

func Maps(x []int) []int {
  arr := []int{}
  for _, num := range x {
    arr = append(arr, num * 2)
  }
  return arr
}
