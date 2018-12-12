package kata

func Race(v1, v2, g int) [3]int {
  if v1 >= v2 {
    return [3]int{-1, -1, -1}
  }
  s := int(float64(g) / float64(v2 - v1) * 3600)
  hours := s / 3600
  mins := (s - (hours * 3600)) / 60
  seconds := (s - (hours * 3600) - (mins * 60))
  return [3]int{hours, mins, seconds}
}
