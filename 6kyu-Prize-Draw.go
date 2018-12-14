package kata

import "strings"
import "unicode"
import "sort"

type People struct {
	name string
	weight int
}

func getWeight(name string, w int) int {
	weight := len(name)
	for _, num := range name {
		weight += (int(unicode.ToUpper(rune(num))) - 64)
	}
	return weight * w
}

func NthRank(st string, we []int, n int) string {
	if st == "" {
		return "No participants"
	}
	peoples := []People{}
	for i, name := range strings.Split(st, ",") {
		peoples = append(peoples, People{name: name, weight: getWeight(name, we[i])})
	}
	sort.Slice(peoples, func(i, j int) bool {
		a := peoples[i]
		b := peoples[j]
		if a.weight == b.weight {
			return a.name < b.name
		}
		return a.weight > b.weight
	})
	if n > len(peoples) {
		return "Not enough participants"
	}
	return peoples[n - 1].name
}
