const Fs = require('fs')

const json = require('./result.json')

const writeResults = data => new Promise((resolve, reject) => {
	Fs.writeFile('./scripts/result.md', data, error => {
		if (error) return reject(error)
	})
	
	resolve()
})

const jsonToMarkdown = data => data.map(line => Object.values(line).join(' | '))

const createResult = data => `
# Ranking

Rank | Nickame | Language | Exercices | Last answer (20h -> 22h) | School
---- | ------- | -------- | --------- | ------------------------ | ------
${jsonToMarkdown(data).join('\n')}
`

writeResults(createResult(json))
	.then(() => {
		console.log('Results writed !')
	})
	.catch(console.error)