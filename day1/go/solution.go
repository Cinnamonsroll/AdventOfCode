package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
)

func main() {
	output := make([]string, 9999)
	increased := 0
	file, err := os.Open("input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer func() {
		if err = file.Close(); err != nil {
			log.Fatal(err)
		}
	}()

	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		output = append(output, scanner.Text())
	}
	for i := 1; i < len(output); i++ {
		if output[i] > output[i-1] {
			increased += 1
		}
	}
	fmt.Println(increased)
}
