const contestResponse = input => {
    const words = input.slice(1)

    const counts = new Map()

    words.forEach(word => {
        if (!counts.has(word)) counts.set(word, 0)

        counts.set(word, counts.get(word) + 1)
    })

    const result = Array.from(counts)
        .find(count => count[1] === 2)
        
    return result[0]
}

module.exports = contestResponse