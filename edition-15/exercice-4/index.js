const FIRE = 'feu'
const WATER = 'eau'
const GRASS = 'plante'
const ICE = 'glace'
const POISON = 'poison'
const GROUND = 'sol'
const FLYING = 'vol'

const TYPES = [FIRE, WATER, GRASS, ICE, POISON, GROUND, FLYING]

const VERSUS = {
    [FIRE]:     { [FIRE]:  0, [WATER]: -1, [GRASS]:  1, [ICE]:  1, [POISON]:  0, [GROUND]:  0, [FLYING]:  0 },
    [WATER]:    { [FIRE]:  1, [WATER]:  0, [GRASS]: -1, [ICE]:  0, [POISON]:  0, [GROUND]: -1, [FLYING]:  0 },
    [GRASS]:    { [FIRE]: -1, [WATER]:  1, [GRASS]:  0, [ICE]:  0, [POISON]:  1, [GROUND]: -1, [FLYING]:  1 },
    [ICE]:      { [FIRE]: -1, [WATER]:  0, [GRASS]:  0, [ICE]:  0, [POISON]:  0, [GROUND]:  0, [FLYING]:  0 },
    [POISON]:   { [FIRE]:  0, [WATER]:  0, [GRASS]: -1, [ICE]:  0, [POISON]:  0, [GROUND]:  0, [FLYING]:  0 },
    [GROUND]:   { [FIRE]:  0, [WATER]:  1, [GRASS]:  1, [ICE]:  0, [POISON]:  0, [GROUND]:  0, [FLYING]:  0 },
    [FLYING]:   { [FIRE]:  0, [WATER]:  0, [GRASS]: -1, [ICE]:  0, [POISON]:  0, [GROUND]:  0, [FLYING]:  0 },
}

const getDuelResult = (typeA, typeB) => VERSUS[typeA][typeB]

const getFightResult = (deckA, deckB) => {
    let indexA = 0, indexB = 0

    while (indexA < deckA.length && indexB < deckB.length) {
        const duelResult = getDuelResult(deckA[indexA], deckB[indexB])

        if (duelResult > 0) {
            indexB++
        } else if (duelResult < 0) {
            indexA++
        } else {
            indexA++
            indexB++
        }
    }

    return indexB - indexA
}

const generateDecksRecursive = (currentDeck, remainingTypes, decks) => {
    if (remainingTypes.length === 0) {
        decks.push(currentDeck)
        return
    }

    for (const i in remainingTypes) {
        const type = remainingTypes[i]
        const newRemainingTypes = [...remainingTypes]
        newRemainingTypes.splice(i, 1)
        generateDecksRecursive([...currentDeck, type], newRemainingTypes, decks)
    }
}

const generateDecks = deck => {
    const decks = []
    generateDecksRecursive([], deck, decks)
    return decks
}

const contestResponse = input => {
    const sachaDeck = input[1].split(' ')
    const myDeck = input[2].split(' ')

    const decks = generateDecks(myDeck)

    const winningDeck = decks.find(deck => getFightResult(deck, sachaDeck) > 0)

    return winningDeck ? winningDeck.join(' ') : -1
}

module.exports = contestResponse