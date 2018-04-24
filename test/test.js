const Fs = require('fs')
const Path = require('path')
const Assert = require('assert')

const codePath = Path.resolve(__dirname, '../')
const testPath = Path.resolve(__dirname, '../test')

const inputRegex = /^input+([0-9]).txt$/

describe('Battle Dev', () => {
	// Foreach Battle Dev editions
	Fs.readdirSync(testPath).forEach(editionFile => {
		const editionTestPath = Path.join(testPath, editionFile)

		if (!Fs.lstatSync(editionTestPath).isDirectory()) return

		describe(editionFile, () => {
			// Foreach Edition exerices
			Fs.readdirSync(editionTestPath).forEach(exerciceFile => {
				const exerciceTestPath = Path.join(editionTestPath, exerciceFile)
				
				if (!Fs.lstatSync(exerciceTestPath).isDirectory()) return

				describe(exerciceFile, () => {
					var exerciceCode = require(Path.join(codePath, editionFile, exerciceFile + '.js'))

					// Foreach test
					Fs.readdirSync(exerciceTestPath).forEach(testFile => {
						const testPath = Path.join(exerciceTestPath, testFile)
						const content = Fs.readFileSync(testPath, { encoding: 'utf-8' })
						
						const rows = content.split('\n')
						const input = rows.slice(0, -2)
						const output = rows.slice(-1)

						it(`${Path.basename(testFile, '.txt')} : Should return ${output}`, () => {
							Assert.equal(exerciceCode(input), output)
						})
					})
				})
			})
		})
	})
})