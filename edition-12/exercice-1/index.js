const contestResponse = input => {
	const initialPrice = Number(input[1])

	const result = input	
		.slice(2)
		.reduce((acc, cur) => {
			const bid = cur.split(' ')
			const value = Number(bid[0])
			return value > acc[0] ? [value, bid[1]] : acc
		}, [initialPrice, 'KO'])
	
	return result[1].toUpperCase()
}

module.exports = contestResponse