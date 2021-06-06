const countDebris = (debris, stopIndex, increment) => {
    const debrisCount = new Map()

    for (let i = 0; i < debris.length; i++) {
        const char = debris[i]
        if (!debrisCount.has(char)) debrisCount.set(char, 0)
    }

    for (let i = 0; i < stopIndex; i++) {
        const char = debris[i]
        debrisCount.set(char, debrisCount.get(char) + increment)
    }

    return debrisCount
}

const isSame = (totalDebris, subPartDebris) => {
    const it = totalDebris.keys()
    
    let result = it.next();
    while (!result.done) {
        const debris = result.value
        
       if (totalDebris.get(debris) !== subPartDebris.get(debris)) return false
        
        result = it.next();
    }
    
    return true
}

const contestResponse = input => {
    const debris = input[1]

    const totalDebris = countDebris(debris, debris.length, 0.5)
    const subPartDebris = countDebris(debris, debris.length / 2, 1)

    let sameCount = 0
    
    for (let i = 0; i < debris.length / 2; i++) {
        if (isSame(totalDebris, subPartDebris)) sameCount++    

        const debrisA = debris[i]
        const debrisB = debris[i + (debris.length / 2)]

        subPartDebris.set(debrisA, subPartDebris.get(debrisA) - 1)
        subPartDebris.set(debrisB, subPartDebris.get(debrisB) + 1)
    }
    
    return sameCount * 2
}

module.exports = contestResponse