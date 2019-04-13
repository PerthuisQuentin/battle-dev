const contestResponse = input => {
	const init = Number(input[0])
	const result = input
	    .slice(1)
	    .reduce((acc, cur) => {
	        const values = cur.split(' ').map(Number)
	        return acc + values[0] - values[1]
	    }, init)
	
	if (result <= 100) {
	    return 1000
	} else if (result <= 10000) {
	    return 100
	} else {
	    return 'KO'
	}
}

module.exports = contestResponse