package kata
import "strings"

func LongestConsec(strarr []string, k int) string {
	if k == 0 {
		return ""
	}
	res := ""
	for i := 0; i + k <= len(strarr); i++ {
		str := strings.Join(strarr[i:i+k], "")
		if len(str) > len(res) {
			res = str
		}
	}
	return res
}
