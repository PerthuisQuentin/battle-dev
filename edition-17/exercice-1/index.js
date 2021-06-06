const contestResponse = input => {
    const [D, L] = input.map(Number)
        
    return D + L * 5
}

module.exports = contestResponse