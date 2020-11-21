const contestResponse = input => {
	const counters = {}
	
	input
		.slice(1)
	    .forEach(color => {
	        if (!counters[color]) counters[color] = 0
	        counters[color]++
	    })
	    
	const colors = Object.keys(counters)
	colors.sort((color1, color2) => counters[color2] - counters[color1])
	
	return `${colors[0]} ${colors[1]}`
}

module.exports = contestResponse