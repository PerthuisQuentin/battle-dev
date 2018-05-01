const upturnPancakes = (pancakes, numberToUpturn) => {
	if (numberToUpturn < 2) {
		return pancakes.slice()
	}

	if (numberToUpturn >= pancakes.length) {
		return pancakes.slice().reverse()
	}

	return pancakes
		.slice(0, numberToUpturn)
		.reverse()
		.concat(pancakes.slice(numberToUpturn))
}

const recursiveGetBestMove = (pancakes, goal, inc, best) => {
	if (inc > 7 || pancakes.join(' ') === goal) {
		return inc
	}

	let localBest = best

	for (let i = 2; i < 7; ++i) {
		const tmpBest = recursiveGetBestMove(upturnPancakes(pancakes, i), goal, inc + 1, best)

		if (tmpBest < localBest) {
			localBest = tmpBest
		}
	}

	return localBest
}

const getBestMove = (pancakes, goal) => recursiveGetBestMove(pancakes, goal, 0, 7)

const contestResponse = input => {
	const parsedInput = input.map(Number)

	const goal = parsedInput
		.slice()
		.sort((a, b) => a - b)
		.join(' ')

	return getBestMove(parsedInput, goal).toString()
}

module.exports = contestResponse