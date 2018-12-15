package kata

func FindNb(m int) int {
	base := 0
	for m > 0 {
		base++
		m -= base * base * base
	}
	if m == 0 {
		return base
	}
	return -1
}
