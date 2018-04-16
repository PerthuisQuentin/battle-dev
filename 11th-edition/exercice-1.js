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


function ContestResponse() {
	//implements your code here using input array
	"use strict"
	let restaurantNumber = input[0]
	
	let bestScore = input
	    .slice(1)
	    .map(x => x
	        .split(' ')
	        .map(Number)
	        .reduce((a, b) => a + b, 0)
	        / 3
        )
	    .reduce((a, b) => a > b ? a : b)
	    
	console.log(Math.ceil(bestScore))
}