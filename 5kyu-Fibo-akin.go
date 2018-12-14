package kata

func genSequence(n int) []int {
	n -= 1
	seq := []int{1, 1, 2, 3}
	if n <= 3 {
		return seq[0 : n + 1]
	}
	for i := 4; i <= n ; i++ {
		key1 := i - seq[i - 2]
		key2 := i - seq[i - 1]
		seq = append(seq, seq[key1] + seq[key2])
	}
	return seq
}

func LengthSupUk(n, k int) int {
	count := 0
	seq := genSequence(n)
	for i := 0; i < n; i++ {
		if (seq[i] >= k) {
			count++
		}
	}
	return count
}

func Comp(n int) int {
	seq := genSequence(n)
	count := 0
	for i := 1; i < n; i++ {
		if (seq[i - 1] > seq[i]) {
			count++
		}
	}
	return count
}
