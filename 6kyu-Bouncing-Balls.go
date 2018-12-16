package kata

func BouncingBall(h, bounce, window float64) int {
	if h <= 0 {
		return -1
	}
	if (bounce <= 0) || (bounce >= 1) {
		return -1
	}
	if window >= h {
		return -1
	}
	times := 0
	for h > window {
		times += 1
		h *= bounce
		if h > window {
			times += 1
		}
	}
	return times
}
