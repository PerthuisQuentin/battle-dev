const Fs = require('fs')
const Path = require('path')
const Assert = require('assert')
const Should = require('should')
const argv = require('yargs').argv

const initialPath = './'

const editionSettings = {
	regex: /edition-[0-9]+/,
	option: 'edition',
	text: 'Edition'
}
const exerciceSettings = {
	regex: /exercice-[0-9]+/,
	option: 'exercice',
	text: 'Exercice'
}
const testSettings = {
	regex: /test-[0-9a-z]+/,
	option: 'test',
	text: 'Test'
}

const display = (text, number) => number ? `${text} #${number}` : text

const loopOnFiles = (path, regex, option, callback) => {
	Fs.readdirSync(path)
		.filter(name => regex.test(name))
		.filter(name => !argv[option] || name.includes(argv[option]))
		.forEach(callback)
}

const loopOnFolders = (settings, callback) => path => {
	if (!Fs.lstatSync(path).isDirectory()) return

	loopOnFiles(path, settings.regex, settings.option, name => {
		const newPath = Path.join(path, name)
		const number = name.split('-')[1]

		describe(display(settings.text, number), () => {
			callback(newPath)
		})
	})
}

const loopOnTests = path => {
	const exerciceCode = require(Path.join('../', path, 'index.js'))

	loopOnFiles(path, testSettings.regex, testSettings.option, name => {
		const testPath = Path.join(path, name)
		const testNumber = Path.basename(name, '.txt').split('-')[1]
		const testContent = Fs.readFileSync(testPath, { encoding: 'utf-8' })

		const rows = testContent.split('\n')
		const separationIndex = rows.indexOf('')
		const input = rows.slice(0, separationIndex)
		const output = rows.slice(separationIndex + 1)

		it(`${display(testSettings.text, testNumber)} : Should return ${output}`, () => {
			output.should.containEql(exerciceCode(input).toString())
		})
	})
}

const loopOnExercices = loopOnFolders(exerciceSettings, loopOnTests)
const loopOnEditions = loopOnFolders(editionSettings, loopOnExercices)

describe('Battle Dev', () => {
	loopOnEditions(initialPath)
})