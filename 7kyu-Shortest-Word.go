package main

import "strings"

func FindShort(s string) int {
	length := len(s)
	for _, word := range strings.Fields(s) {
		if len(word) < length {
			length = len(word)
		}
	}
	return length
}
