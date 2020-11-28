const contestResponse = input => {
    const entries = input[1].split(' ').map(Number)

    const preComputing = [0]
    entries.forEach((entry, i) => preComputing.push(preComputing[i] ^ entry))

    const instructions = input
        .slice(2)
        .map(instruction => {
            const [start, end] = instruction.split(' ').map(Number)
            return { start, end }
        })

    const counts = Array.from({ length: 256 }, _ => 0)

    instructions
        .forEach(instruction => {
            const result = preComputing[instruction.end + 1] ^ preComputing[instruction.start]
            counts[result]++
        })

    return counts.join(' ')
}

module.exports = contestResponse