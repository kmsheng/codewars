package kata

import "math"

func century(year int) int {
	return int(math.Ceil(float64(year) / 100.0))
}
