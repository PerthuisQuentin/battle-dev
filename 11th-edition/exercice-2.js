/*******
 * Read input from STDIN
 * Use console.log()  to output your result.
 * Use:
 *      LocalPrint( $variable ); 
 * to display simple variables in a dedicated area.
 * 
 * Use:
 *      LocalPrintArray( $array ); 
 * to display arrays in a dedicated area.
 * ***/

var input = [];

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are red
readline_object.on("close", ContestResponse); 


function determineReduction(n) {
	if (n > 9) return 0.3
	if (n > 5) return 0.2
	if (n > 3) return 0.1
	return 0
}

function ContestResponse() {
	//implements your code here using input array
	"use strict"
	let pricePerPerson = Number(input[0])
	
	let totalSales = input
		.slice(2)
		.map(Number)
		.map(numberOfPerson => numberOfPerson * pricePerPerson * (1 - determineReduction(numberOfPerson)))
		.reduce((a, b) => a + b)
		
	console.log(Math.ceil(totalSales))
}