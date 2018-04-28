const EMPTY = '.'
const SPRINKLER = 'X'
const WATERED = 'O'

const contestResponse = input => {
	const size = Number(input[0]) - 1

	const field = input
		.slice(1)
		.map(x => x.split(''))
		
	field.forEach((row, x) => row.forEach((cell, y) => {
			if (cell !== SPRINKLER) return

			for (let a = Math.max(x - 1, 0); a <= Math.min(x + 1, size); ++a) {
				for (let b = Math.max(y - 1, 0); b <= Math.min(y + 1, size); ++b) {
					if (field[a][b] === EMPTY) {
						field[a][b] = WATERED
					}
				}
			}
		}))

	const wateredCellsNumber = field
		.map(row => row.reduce((total, cell) => cell === WATERED ? total + 1 : total, 0))
		.reduce((total, current) => current + total)

	return wateredCellsNumber
}

module.exports = contestResponse