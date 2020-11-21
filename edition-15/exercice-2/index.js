const contestResponse = input => {
	let longestSerie = 0
	let currentSerie = 0
	let previousValue
	
	input
	    .slice(1)
	    .map(value => Number(value))
	    .forEach(value => {
	        if (value === previousValue) currentSerie++
            else currentSerie = 1
            
	        previousValue = value
	        if (currentSerie > longestSerie) longestSerie = currentSerie
	    })
	
	return longestSerie
}

module.exports = contestResponse