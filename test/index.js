const Fs = require('fs')
const Path = require('path')
const Assert = require('assert')
const Should = require('should')
const argv = require('yargs').argv

const initialPath = './'
const editionRegex = /edition-[0-9]+/
const excerciceRegex = /exercice-[0-9]+/
const testRegex = /test-[0-9]+/

describe('Battle Dev', () => {
	// Foreach Battle Dev editions
	Fs.readdirSync(initialPath)
		.filter(editionName => editionRegex.test(editionName))
		.filter(editionName => !argv.edition || editionName.includes(argv.edition))
		.forEach(editionName => {
			const editionPath = Path.join(initialPath, editionName)
			if (!Fs.lstatSync(editionPath).isDirectory()) return
			const editionNumber = editionName.split('-')[1]

			describe(`Edition #${editionNumber}`, () => {
				// Foreach Edition exerices
				Fs.readdirSync(editionPath)
					.filter(exerciceName => excerciceRegex.test(exerciceName))
					.filter(exerciceName => !argv.exercice || exerciceName.includes(argv.exercice))
					.forEach(exerciceName => {
						const exercicePath = Path.join(editionPath, exerciceName)
						if (!Fs.lstatSync(exercicePath).isDirectory()) return
						const exerciceNumber = exerciceName.split('-')[1]

						describe(`Exercice #${exerciceNumber}`, () => {
							const exerciceCode = require(Path.join('../', exercicePath, 'index.js'))

							// Foreach Exercice tests
							Fs.readdirSync(exercicePath)
								.filter(testName => testRegex.test(testName))
								.filter(testName => !argv.test || testName.includes(argv.test))
								.forEach(testName => {
									const testPath = Path.join(exercicePath, testName)
									const testNumber = Path.basename(testName, '.txt').split('-')[1]
									const testContent = Fs.readFileSync(testPath, { encoding: 'utf-8' })

									const rows = testContent.split('\n')
									const separationIndex = rows.indexOf('')
									const input = rows.slice(0, separationIndex)
									const output = rows.slice(separationIndex + 1)

									it(`Test #${testNumber} : Should return ${output}`, () => {
										output.should.containEql(exerciceCode(input).toString())
									})
								})
						})
					})
			})
	})
})