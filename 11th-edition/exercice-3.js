const contestResponse = input => {
	const myScores = input[0].split(' ').map(Number)
	
	const bestFriendNumber = Number(input[2])
	
	const finalScore = input
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
		
	return Math.floor(finalScore).toString()
}

module.exports = contestResponse