package kata

import "sort"

func InAscOrder(numbers []int) bool {
	arr := make([]int, len(numbers))
	copy(arr, numbers)
	sort.Ints(arr)
	for i, _ := range numbers {
		if arr[i] != numbers[i] {
			return false
		}
	}
	return true
}
