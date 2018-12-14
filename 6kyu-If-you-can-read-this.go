package kata

import "strings"

func ToNato(words string) string {

	nato := []string{"Alfa", "Bravo", "Charlie", "Delta", "Echo",
	"Foxtrot","Golf", "Hotel", "India", "Juliett", "Kilo",
	"Lima", "Mike", "November", "Oscar", "Papa", "Quebec",
	"Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey",
	"X-ray", "Yankee", "Zulu"}

	arr := []string{}
	for _, index := range words {
		if (65 <= index) && (index <= 90) {
			arr = append(arr, nato[index - 65])
		} else if (97 <= index) && (index <= 122) {
			arr = append(arr, nato[index - 97])
		} else if (index != 32) && (index != 45) {
			arr = append(arr, string(rune(index)))
		}
	}
	return strings.Join(arr, " ")
}
