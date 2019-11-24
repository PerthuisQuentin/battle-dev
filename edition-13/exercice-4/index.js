const MAX_LENGTH = 10
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
const DEFAULT_REPONSE = 'KO'
const INITIAL_WORD = ''

let longerWord

const setInitialLongerWord = () => longerWord = INITIAL_WORD
const getLongerWord = () => longerWord

const saveLongerWord = newWord => longerWord = newWord.length > longerWord.length ? newWord : longerWord

const isCommonWordInWord = (word, commonWord) => {
	const letters = commonWord
	let indexInLetters = 0

	for (let i = 0; i < word.length; i++) {
		if (letters[indexInLetters] && letters[indexInLetters] === word[i]) indexInLetters++
	}

	return indexInLetters === commonWord.length
}

const isCommonWordInEveryWords = (words, commonWord) => words.every(word => isCommonWordInWord(word, commonWord))

const recursive = (words, commonWord) => {
	if (commonWord.length === MAX_LENGTH) return

	for (let i = 0; i < ALPHABET.length; i++) {
        const newCommonWord = commonWord + ALPHABET[i]
		
		if (isCommonWordInEveryWords(words, newCommonWord)) {
			saveLongerWord(newCommonWord)
			recursive(words, newCommonWord)
		}
	}
}

const contestResponse = input => {
	const words = input.slice(1)

	setInitialLongerWord()

	recursive(words, INITIAL_WORD)

	const result = getLongerWord()

	return result !== INITIAL_WORD ? result : DEFAULT_REPONSE
}

module.exports = contestResponse