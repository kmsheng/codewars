package kata

import "math"

func EquableTriangle(a, b, c int) bool {
	perimeter := a + b + c
	s := perimeter / 2
	area := math.Sqrt(float64(s * (s - a) * (s - b) * (s - c)))
	return perimeter == int(area)
}
