const determineRoundScore = (cardA, cardB) => {
	if (cardA < cardB) return -1
	if (cardA > cardB) return 1
	return 0
}

const contestResponse = input => {
	const score = input
		.slice(1)
		.map(x => x
			.split(' ')
			.map(Number)
		)
		.map(x => determineRoundScore(x[0], x[1]))
		.reduce((a, b) => a + b, 0)

	return score > 0 ? 'A' : 'B'
}

module.exports = contestResponse