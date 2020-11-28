function count(counts, teams, chef, level) {
    const team = teams[chef]
    if (!team) return
    
    for(let t of team) {
        counts[level]++
        count(counts, teams, t, level + 1)
    }
}

const contestResponse = input => {
	const teams = {}
	
	input
	    .slice(1)
	    .forEach(x => {
			const [subaltern, chief] = x.split(' ')
			
	        if (!teams[chief]) teams[chief] = []
	        teams[chief].push(subaltern)
	    })
	    
	const counts = Array.from({ length: 10 }, _ => 0)
	
	counts[0] = 1
	count(counts, teams, '0', 1)
	
	return counts.join(' ')
}

module.exports = contestResponse