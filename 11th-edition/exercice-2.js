const determineReduction = n => {
	if (n > 9) return 0.3
	if (n > 5) return 0.2
	if (n > 3) return 0.1
	return 0
}

const contestResponse = input => {

	let pricePerPerson = Number(input[0])
	
	let totalSales = input
		.slice(2)
		.map(Number)
		.map(numberOfPerson => numberOfPerson * pricePerPerson * (1 - determineReduction(numberOfPerson)))
		.reduce((a, b) => a + b)
		
	return Math.ceil(totalSales)
}

module.exports = contestResponse