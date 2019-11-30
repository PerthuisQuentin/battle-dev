const contestResponse = input => {
	const woodPlanks = input.map(Number)

	const shortest = woodPlanks.reduce((acc, cur) => cur < acc ? cur : acc)

	const rest = woodPlanks.reduce((total, plank) => total + (plank - shortest), 0)

	return rest
}

module.exports = contestResponse