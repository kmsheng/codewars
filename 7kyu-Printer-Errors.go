package kata
import "fmt"
import "regexp"

func PrinterError(s string) string {
	var count = 0
	for _, c := range s {
		match, _ := regexp.MatchString("[^a-m]", string(c));
		if match {
			count++
		}
	}
	return fmt.Sprintf("%d/%d", count, len(s))
}
