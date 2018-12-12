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
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] > nums[j]
	})
	return fmt.Sprintf("%d %d", nums[0], nums[len(nums) - 1])
}
