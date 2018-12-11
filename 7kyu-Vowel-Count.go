package kata
import "strings"

func GetCount(str string) int {
  var count = 0
  for _, c := range str {
    var char = string(c)
    if strings.Contains("aeiou", char) {
      count++
    }
  }
  return count
}
