const COLUMNS = 10
const ROWS = 20
const BLOC = '#'

const getColumnBottom = (grid, column) => {
    let bottom = 0

    for (let row = 0; row < ROWS; row++) {
        if (grid[row][column] === BLOC) {
            return bottom - 1
        }

        bottom++
    }

    return ROWS - 1
}

const canMakeTetris = (grid, bottom) => {
    if (bottom < 3) return false

    for (let row = bottom; row > (bottom - 4); row--) {
        const blocCount = grid[row].reduce((total, current) => current === BLOC ? total + 1 : total, 0)
        if (blocCount !== 9) return false
    }

    return true
}

const contestResponse = input => {
    const grid = input.map(line => line.split(''))
        
    const columnBottoms = []

    for (let column = 0; column < COLUMNS; column++) {
        columnBottoms.push(getColumnBottom(grid, column))
    }

    for (let column = 0; column < COLUMNS; column++) {
        if (canMakeTetris(grid, columnBottoms[column])) {
            return `BOOM ${column + 1}`
        }
    }

    return 'NOPE'
}

module.exports = contestResponse