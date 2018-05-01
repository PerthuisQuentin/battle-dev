const contestResponse = input => {
	const bestScore = input
		.slice(1)
		.map(x => x
			.split(' ')
			.map(Number)
			.reduce((a, b) => a + b, 0)
			/ 3
		)
		.reduce((a, b) => a > b ? a : b)
		
	return Math.ceil(bestScore).toString()
}

module.exports = contestResponse