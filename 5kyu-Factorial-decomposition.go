package kata

import "sort"
import "strings"
import "strconv"

func filter(nums []int, n int) []int {
	arr := []int{}
	for i := 0; i < len(nums); i++ {
		if (n == nums[i]) || (nums[i] % n != 0) {
			arr = append(arr, nums[i])
		}
	}
	return arr
}

func eratosthenes(n int) (map[int]bool, []int) {

	primes := []int{2, 3, 5}

	for i := 1; ((6 * i + 1) <= n); i++ {
		num1 := 6 * i + 1
		num2 := 6 * i + 5

		if (num1 <= n) {
			primes = append(primes, num1)
		}
		if (num2 <= n) {
			primes = append(primes, num2)
		}
	}
	sort.Ints(primes)

	for i := 0; i < len(primes); i++ {
		primes = filter(primes, primes[i])
	}

	res := make(map[int]bool)

	for _, num := range primes {
		res[num] = true
	}
	return res, primes
}

func Decomp(n int) string {

	primes, arrPrimes := eratosthenes(n)
	arr := []int{}

	for i := 2; i <= n; i++ {
		if primes[i] {
			arr = append(arr, i)
		} else {
			num := i
			for j := 0; j < len(arrPrimes); j++ {
				prime := arrPrimes[j]
				if num % prime == 0 {
					arr = append(arr, prime)
					num /= prime
					j -= 1
				}
				if num == 1 {
					break
				}
				if j > (i / 2) {
					break
				}
			}
		}
	}
	sort.Ints(arr)

	order := []int{}
	m := make(map[int]int)

	for _, num := range arr {
		if m[num] == 0 {
			order = append(order, num)
		}
		m[num]++
	}

	var sb strings.Builder

	for i, num := range order {

		base := strconv.FormatInt(int64(num), 10)
		power := strconv.FormatInt(int64(m[num]), 10)

		if m[num] == 1 {
			sb.WriteString(base)
		} else {
			sb.WriteString(base)
			sb.WriteString("^")
			sb.WriteString(power)
		}

		if i != (len(order) - 1) {
			sb.WriteString(" * ")
		}
	}

	return sb.String()
}
