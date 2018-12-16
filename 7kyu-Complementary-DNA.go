package kata

import "strings"

func DNAStrand(dna string) string {
  m := map[string]string{"A": "T", "T": "A", "C": "G", "G": "C"}
  var b strings.Builder
  for _, c := range strings.Split(dna, "") {
    b.WriteString(m[c])
  }
  return b.String()
}
