package kata

import "sort"

func unique(nums []int) []int {
	m := make(map[int]bool)
	arr := []int{}
	for _, num := range nums {
		if m[num] {
			continue
		}
		m[num] = true
		arr = append(arr, num)
	}
	return arr
}

func concat(arrs [][]int) []int {
	res := []int{}
	for _, arr := range arrs {
		res = append(res, arr...)
	}
	return res
}

func Crossover(ns []int, xs []int,ys []int) ([]int, []int) {
	sort.Ints(ns)
	operations := unique(ns)
	for _, op := range operations {
		newXs := concat([][]int{xs[0:op], ys[op:]})
		newYs := concat([][]int{ys[0:op], xs[op:]})
		xs = newXs
		ys = newYs
	}
	return xs, ys
}
