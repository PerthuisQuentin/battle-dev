const contestResponse = input => {
	let count = 0
	let weight = 0
	
	input
	    .slice(1)
	    .map(Number)
	    .forEach(x => {
	        if (weight + x > 100) {
	            weight = x
	            count++
	        } else {
	            weight += x
	        }
	    })
	    
	return ++count
}

module.exports = contestResponse