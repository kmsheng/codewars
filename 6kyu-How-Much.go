package kata

import "fmt"

func HowMuch(m int, n int) [][3]string {
  if m > n {
    m, n = n, m
  }
	res := [][3]string{}
	for f := m; f <= n; f++ {
		for b := 1; (b * 7) <= (f - 2); b++ {
			for c := 1; (c * 9) <= (f - 1); c++ {
				if ((b * 7) == (f - 2)) && ((c * 9) == (f - 1)) {
					res = append(res, [3]string{fmt.Sprintf("M: %d", f), fmt.Sprintf("B: %d", b), fmt.Sprintf("C: %d", c)})
				}
			}
		}
	}
  if len(res) == 0 {
    return nil
  }
	return res
}
