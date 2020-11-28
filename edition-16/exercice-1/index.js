const contestResponse = input => {
    const regex = /[a-zA-Z]*[0-9]{5}$/
    
    const count = input
        .slice(1)
        .filter(x => regex.test(x))
        .length
        
    return count
}

module.exports = contestResponse