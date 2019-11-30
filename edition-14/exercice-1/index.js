const contestResponse = input => {
	const shortest = input
		.slice(1)
		.map(line => {
			const splitted = line.split(' ')
			return {
				name: splitted[0],
				length: Number(splitted[1])
			}
		})
		.reduce((shortest, current) => current.length < shortest.length ? current : shortest)

	return shortest.name
}

module.exports = contestResponse