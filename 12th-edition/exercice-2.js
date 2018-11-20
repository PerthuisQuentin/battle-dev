const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

const contestResponse = input => {
	const set = new Set(input.slice(1))

	const result = Array.from(set).filter(word => {
		if (word.length < 5 || word.length > 7) return false

		if (!vowels.includes(word[word.length - 1])) return false

		const char = (((word.charCodeAt(0) - 97) + 1) % 26) + 97
		if (word.charCodeAt(1) !== char) return false		

		return true
	})
	.length

	return result.toString()
}

module.exports = contestResponse