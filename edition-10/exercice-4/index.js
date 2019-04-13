const coupling = {
	A: 'T',
	T: 'A',
	C: 'G',
	G: 'C'
}

const isGenomeCorrect = genome => {
	const textGenome = genome.join('')

	if (textGenome.length % 2 === 1) {
		return false
	}

	const genomeMiddle = textGenome.length / 2

	for (let i = 0; i < genomeMiddle; i++) {
		if (coupling[textGenome[i]] !== textGenome[genomeMiddle + i]) {
			return false
		}
	}

	return true
}

const prepareForOutput = genome => {
	let textGenome = ''
	const middle = genome.join('').length / 2

	let letters = 0
	let middleReached = false

	for (let fragment of genome) {
		letters += fragment.length
		textGenome += fragment

		if (!middleReached && letters >= middle) {
			textGenome += '#'
			middleReached = true
		} else {
			textGenome += ' '
		}
	}

	return textGenome.trim()
}

const recursiveGetCorrectAssociation = (genome, fragments) => {
	if (fragments.length === 0) {
		return isGenomeCorrect(genome) ? genome : false
	}

	for (let i in fragments) {
		const nextGenome = genome.slice()
		nextGenome.push(fragments[i])

		const nextFragments = fragments.slice()
		nextFragments.splice(i, 1)

		const found = recursiveGetCorrectAssociation(nextGenome, nextFragments)

		if (found) {
			return found
		}
	}
}

const getCorrectAssociation = fragments => recursiveGetCorrectAssociation([], fragments)

const contestResponse = input => {
	const fragments = input.slice(1)
	const correctGenome = getCorrectAssociation(fragments)
	return prepareForOutput(correctGenome)
}

module.exports = contestResponse