package main

import "fmt"

var name = "Tamas"

func main() {

	// var name = "Tamas"
	// name := "Tamas"
	var age int32 = 20

	const isCool = true
	size := 1.3

	fmt.Println(name, age, isCool, size)
	fmt.Printf("%T\n", isCool)
}

// string
// bool
// int - int int8 int16 int32 int64
// uint uint8 uint16 uint32 uint64 uintptr
// byte -> uint8
// rune -> int32
// float32 float64
// complex64 complex128
