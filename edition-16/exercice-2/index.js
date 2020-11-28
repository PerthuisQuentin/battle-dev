const contestResponse = input => {
	let counter = 0
	
	input
	    .slice(1)
	    .map(time => Number(time.split(':')[0]))
	    .forEach(hour => {
			counter += (hour >= 8 && hour < 20) ? -1 : 1
		})
	    
	return counter > 0 ? 'SUSPICIOUS' : 'OK'
}

module.exports = contestResponse