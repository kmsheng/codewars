package kata

import "strconv"
import "strings"

func getSum(n int) int {
	ints := []int{1, 10, 9, 12, 3, 4}
	strArr := strings.Split(strconv.Itoa(n), "")
	sum := 0
	j := 0
	for i := len(strArr) - 1; i >= 0; i-- {
		num, _ := strconv.Atoi(strArr[i])
		sum += num * ints[j % 6]
		j++
	}
	return sum
}

func Thirt(n int) int {

	var lastNum int

	for true {
		n = getSum(n)
		if lastNum == n {
			break
		}
		lastNum = n
	}
	return lastNum
}
