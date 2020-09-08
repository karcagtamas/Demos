package main

import "fmt"

func main() {
	// Arrays
	var fruits [2]string

	// Assign values
	fruits[0] = "Apple"
	fruits[1] = "Orange"

	fruitArr := [2]string{"Apple", "Orange"}
	fmt.Println(fruits)
	fmt.Println(fruitArr)

	fruitSlice := []string{"Apple", "Orange", "Grape"}

	fmt.Println(fruitSlice)
	fmt.Println(fruitSlice[1:2])
}
