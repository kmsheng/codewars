package kata

import "fmt"
import "strings"
import "sort"
import "strconv"

func HighAndLow(str string) string {
  strs := strings.Fields(str)
  nums := []int{}
  for _, s := range strs {
    parsed, _ := strconv.Atoi(s)
    nums = append(nums, parsed)
  }
  sort.Ints(nums)
  return fmt.Sprintf("%d %d", nums[len(nums) - 1], nums[0])
}
