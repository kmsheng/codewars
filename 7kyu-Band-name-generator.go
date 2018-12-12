package kata

import "fmt"
import "strings"

func bandNameGenerator(word string) string {
	first := string(word[0])
	last := string(word[len(word) - 1])
	if first == last {
		return strings.ToUpper(first) + strings.ToLower(string(word[1:len(word) - 1])) + strings.ToLower(word)
	}
	words := strings.Split(word, "-")
	for i := 0; i < len(words); i++ {
		words[i] = strings.ToUpper(string(words[i][0])) + strings.ToLower(words[i][1:])
	}
	return fmt.Sprintf("The %s", strings.Join(words, "-"))
}
