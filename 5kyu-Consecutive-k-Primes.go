package kata

import "sort"

func filter(nums []int, n int) []int {
	arr := []int{}
	for i := 0; i < len(nums); i++ {
		if (n == nums[i]) || (nums[i] % n != 0) {
			arr = append(arr, nums[i])
		}
	}
	return arr
}

func eratosthenes(n int) []int {

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

	return primes
}

func getKprime(num int, primes []int) int {
	arr := []int{}

	for num != 1 {
		for _, prime := range primes {
			if num % prime == 0 {
				arr = append(arr, prime)
				num /= prime
				break
			}
		}
	}
	return len(arr)
}

func ConsecKprimes(k int, nums []int) int {
	maxNum := max(nums)
	primes := eratosthenes(maxNum)
	count := 0

	for i := 1; i < len(nums); i++ {
		prev := getKprime(nums[i - 1], primes)
		curr := getKprime(nums[i], primes)
		if (prev == k) && (curr == k) {
			count++
		}
	}
	return count
}

func max(nums []int) int {
	maxNum := nums[0]
	for i := 1; i < len(nums); i++ {
		if nums[i] > maxNum {
			maxNum = nums[i]
		}
	}
	return maxNum
}
