const contestResponse = input => {
	const search = input[1]

	const prices = input
		.slice(2)
		.filter(x => x.split(' ')[0] === search)
		.map(x => Number(x.split(' ')[1]))

	const lowerPrice = prices.reduce((lower, current) => current < lower ? current : lower, prices[0])

	return lowerPrice
}

module.exports = contestResponse