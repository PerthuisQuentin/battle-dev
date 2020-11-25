const generateCompleteCombinations_R = (combinations, remainingElements, currentCombination) => {
    if (remainingElements.length === 0) {
        combinations.push(currentCombination)
        return
    }

    for (const i in remainingElements) {
        const addedElement = remainingElements[i]
        const newRemainingElements = [...remainingElements]
        newRemainingElements.splice(i, 1)
        generateCompleteCombinations_R(combinations, newRemainingElements, [...currentCombination, addedElement])
    }
}

const generateCompleteCombinations = elements => {
    const combinations = []
    generateCompleteCombinations_R(combinations, elements, [])
    return combinations
}

const generatePartialCombinations_R = (combinations, remainingElements, currentCombination) => {
    if (remainingElements.length === 0) return

    for (const i in remainingElements) {
        const addedElement = remainingElements[i]
        const newCombination = [...currentCombination, addedElement]
        combinations.push(newCombination)

        const newRemainingElements = [...remainingElements]
        newRemainingElements.splice(i, 1)
        generatePartialCombinations_R(combinations, newRemainingElements, newCombination)
    }
}

const generatePartialCombinations = elements => {
    const combinations = []
    generatePartialCombinations_R(combinations, elements, [])
    return combinations
}

console.log(generatePartialCombinations(['a', 'b', 'c', 'd']))
console.log(generatePartialCombinations(['a', 'b', 'c', 'd']).length)
