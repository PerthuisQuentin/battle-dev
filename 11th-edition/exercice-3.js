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
	let myScores = input[0].split(' ').map(Number)
	
	let bestFriendNumber = Number(input[2])
	
	let finalScore = input
		.slice(3)
		.map(row => {
			let scores = row.split(' ').map(Number)
			let sum = scores
				.slice(0, 5)
				.reduce((acc, val, i) => acc + Math.abs(val - myScores[i]), 0)
			return {
				average: sum / 5,
				lastMovie: scores[5]
			}
		})
		.sort((a, b) => a.average - b.average)
		.slice(0, bestFriendNumber)
		.reduce((acc, val) => acc + val.lastMovie, 0)
		/ bestFriendNumber
		
	console.log(Math.floor(finalScore))
}