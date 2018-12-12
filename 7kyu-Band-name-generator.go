package kata

import "strings"

func bandNameGenerator(word string) string {
	first := word[:1]
	last := word[len(word) - 1:]
	title := strings.Title(word)
	if first == last {
		return title + title[1:]
	}
	return "The " + title
}
