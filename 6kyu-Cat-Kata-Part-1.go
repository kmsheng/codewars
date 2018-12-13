package kata

import "math"

type Coord struct {
	name string
	x float64
	y float64
}

func getCoords(yard []string) []Coord {
	arr := []Coord{}
	for i := 0; i < len(yard); i++ {
		for j := 0; j < len(yard[i]); j++ {
			char := string(yard[i][j])
			if char == "M" || char == "R" || char == "L" {
				arr = append(arr, Coord{char, float64(i), float64(j)})
			}
		}
	}
	return arr
}

func getSingleDistance(obj1 Coord, obj2 Coord) float64 {
	if obj1.x == obj2.x {
		return math.Abs(obj1.y - obj2.y)
	}
	if obj1.y == obj2.y {
		return math.Abs(obj1.x - obj2.x)
	}
	return math.Sqrt(math.Pow(obj1.x - obj2.x, 2) + math.Pow(obj1.y - obj2.y, 2))
}

func getDistances(coords []Coord) []float64 {
	arr := []float64{}
	length := len(coords)
	for i := 1; i < length; i++ {
		arr = append(arr, getSingleDistance(coords[i - 1], coords[i]))
	}
	if length > 2 {
		arr = append(arr, getSingleDistance(coords[0], coords[len(coords) - 1]))
	}
	return arr
}

func PeacefulYard(yard []string, minDistance int) bool {
	coords := getCoords(yard)
	if (len(coords) <= 1) {
		return true
	}
	distances := getDistances(coords)
	for _, d := range distances {
		if int(d) < minDistance {
			return false
		}
	}
	return true
}
