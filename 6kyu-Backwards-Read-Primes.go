package kata

import "sort"
import "strconv"
import "strings"

func getReversedNum(num int) int {
	var builder strings.Builder
	str := strconv.Itoa(num)
	strarr := strings.Split(str, "")
	for i := len(strarr) - 1; i >= 0; i-- {
		builder.WriteString(strarr[i])
	}
	reversedStr := builder.String()

	if str == reversedStr {
		return -1
	}
	reversedNum, _ := strconv.Atoi(reversedStr)
	reversedStr = strconv.Itoa(reversedNum)

	if len(str) != len(reversedStr) {
		return -1
	}
	return reversedNum
}

func isPrime(n int) bool {
	if n <= 3 {
		return n > 1
	}
	if (n % 2 == 0) || (n % 3 == 0) {
		return false
	}
	i := 5
	for i * i <= n {
		if (n % i == 0) || (n % (i + 2) == 0) {
			return false
		}
		i += 6
	}
	return true
}

func BackwardsPrime(start int, stop int) []int {

	set := make(map[int]bool)
	for i := start; i <= stop; i++ {
		if isPrime(i) {
			reversed := getReversedNum(i)
			if (reversed != -1) && isPrime(reversed) {
				set[i] = true
				if (start <= reversed) && (reversed <= stop) {
					set[reversed] = true
				}
			}
		}
	}
	res := []int{}
	for key := range set {
		res = append(res, key)
	}
	if len(res) == 0 {
		return nil
	}
	sort.Ints(res)
	return res
}
