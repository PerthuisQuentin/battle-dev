const Fs = require('fs')

const json = require('./result.json')

const writeResults = data => new Promise((resolve, reject) => {
	Fs.writeFile('./scripts/resultNodeJS.json', JSON.stringify(data, null, '\t'), error => {
		if (error) return reject(error)
	})
	
	resolve()
})

const createResult = data => {
    let rank = 1
    
    return data
        .filter(line => line.language === 'NodeJS')
        .map(line => ({
            ...line,
            rank: rank++
        }))
}

writeResults(createResult(json))
	.then(() => {
		console.log('Results writed !')
	})
	.catch(console.error)