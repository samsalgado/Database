package main
import ("fmt"
"github.com/elliotforbes/athena/port"
)
func main() {
	fmt.Println("Port scanner, Cybersecurity 101")
	open := port.ScanPort("tcp", "localhost", 3000)
	fmt.Printf("Port Open: %t\n", open)
	results := port.InitialScan("localhost")
	fmt.Println(results)
}

