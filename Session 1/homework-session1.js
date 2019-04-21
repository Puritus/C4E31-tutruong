// Homework: Session 1
// 1. Answers question:
// a. The way to check variable's type:

// - Use typeof:

typeof "foo"
"string"
typeof true
"boolean"
typeof 42
"number"

// b. The variables have invalid names:

// - Start with number (1, 2, 3...)
// - Includes special characters (*, ^, #...)
// - Includes source code characters (let, var, prompt...)

// Examples: 123techkids, mind^x, else...

// 2. Writes a program caculates the area of circle:

let x = prompt("Input radius of the circle:");
console.log("Area of the circle:");
console.log(Number(x * x) * 3.14);

// 3. Writes a program that converts from Celsius into Fahrenheit:

let x = prompt("Input the temprature in Celsius (10 celsius = 50 fahrenheits):");
console.log("The temprature in Fahrenheit:");
console.log(Number(x) * 5);

// 4. Uses Python Turtle to draw some triangles:
// a. A square:

for i in range(4):
	go(100)
    turn(90)
    
// b. An equilateral triangle:

for i in range(3):
	go(100)
    turn(360/3)

// c. An circle:

for i in range(4):
	go(100)
    turn(90)

//. d Multi-cicles:

for i in range(6):
	for i in range(360):
		go(1)
		turn(1)
    turn(60)

// e. More circles:

for i in range(24):
	for i in range(360):
		go(1)
		turn(1)
    turn(15)

