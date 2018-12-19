package kata

func ProductFib(n uint64) [3]uint64 {

	var a uint64 = 0
	var b uint64 = 1

	for i := uint64(2); i < n; i++ {
		tmp := b
		b = a + b
		a = tmp
		if a * b > n {
			return [3]uint64{a, b, 0}
		}
		if a * b == n {
			return [3]uint64{a, b, 1}
		}
	}
	return [3]uint64{a, b, 0}
}
