package kata

import "fmt"
import "strings"
import "strconv"

func FizzBuzzCuckooClock(time string) string {
	fmt.Println(time)
	hours, _ := strconv.Atoi(time[:2])
	mins, _ := strconv.Atoi(time[3:])
	isThreeDivisible := mins % 3 == 0
	isFiveDivisible := mins % 5 == 0

	hours %= 12

	if hours == 0 {
		hours = 12
	}
	if mins == 0 {
		res := strings.Repeat("Cuckoo ", hours)
		return res[:len(res) - 1]
	}
	if mins == 30 {
		return "Cuckoo"
	}
	if isThreeDivisible && isFiveDivisible {
		return "Fizz Buzz"
	}
	if isThreeDivisible {
		return "Fizz"
	}
	if isFiveDivisible {
		return "Buzz"
	}
	return "tick"
}
