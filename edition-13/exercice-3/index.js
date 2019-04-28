const find = thing => map => {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === thing) {
                return { y, x } 
            }
        }
    }
    
    return null
}

const findGold = find('o')
const findMultiplicator = find('*')

const removeThing = (map, pos) => map[pos.y][pos.x] = '.'

const getPath = (map, from, to) => {
    let current = { y: from.y, x: from.x }
    let path = ''
    
    while (current.y !== to.y) {
        if (current.y > to.y) {
            path += '^'
            current.y--
        } else {
            path += 'v'
            current.y++
        }
    }
    
    while (current.x !== to.x) {
        if (current.x > to.x) {
            path += '<'
            current.x--
        } else {
            path += '>'
            current.x++
        }
    }
    
    return path
}

const contestResponse = input => {
	const map = input
	    .slice(1)
	    .map(x => x.split(''))
	
	let path = ''
    let currentPos = { x: 0, y: 0 }
	
	let objectif = findGold(map)
	
	while (objectif) {
	    path += getPath(map, currentPos, objectif) + 'x'
	    removeThing(map, objectif)
	    currentPos = objectif
	    objectif = findGold(map)
	}
	
	objectif = findMultiplicator(map)
	
	while (objectif) {
	    path += getPath(map, currentPos, objectif) + 'x'
	    removeThing(map, objectif)
	    currentPos = objectif
	    objectif = findMultiplicator(map)
	}
	
	return path
}

module.exports = contestResponse