package kata

func SquaresInRect(lng int, wdth int) []int {
	if lng == wdth {
		return nil
	}
	if (wdth < lng) {
		lng, wdth = wdth, lng
	}
	res := []int{}
	area := lng * wdth
	for area > 0 {
		res = append(res, lng)
		area -= lng * lng
		wdth -= lng
		if (wdth < lng) {
			lng, wdth = wdth, lng
		}
	}
	return res
}
