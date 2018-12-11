package kata

func SumEvenFibonacci(limit int) int {
	a, b, sum := 1, 2, 2
	for b < limit {
		a, b = b, a + b
		if b % 2 == 0 {
			sum += b
		}
	}
	return sum
}
