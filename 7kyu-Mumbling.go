package kata

import "strings"

func Accum(s string) string {
  chars := strings.Split(s, "")
  var b strings.Builder
  var length = len(chars)
  for i, char := range chars {
    b.WriteString(strings.Title(strings.Repeat(strings.ToLower(char), i + 1)))
    if i != (length - 1) {
      b.WriteString("-")
    }
  }
  return b.String()
}
