package kata

import "math"

func isDivisorSquared(num int) (bool, int) {
	sum := 0
	for i := 1; i <= int(math.Sqrt(float64(num))); i++ {
		if num % i == 0 {
			sum += i * i
			j := num / i
			if j != i {
				sum += j * j
			}
		}
	}
	res := math.Sqrt(float64(sum))
	isSquared := res == math.Trunc(res)

	return isSquared, sum
}

func ListSquared(m, n int) [][]int {
	arr := [][]int{}
	for i := m; i <= n; i++ {
		isSquared, sum := isDivisorSquared(i)
		if isSquared {
			arr = append(arr, []int{i, sum})
		}
	}
	return arr
}
