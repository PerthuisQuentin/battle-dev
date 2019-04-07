const Fs = require('fs')

const Axios = require('axios')
const Html2Json = require('html2json').html2json

const htmlToJson = data => Html2Json(data.table_tbody)
	.child
	.map(line => ({
		rank: Number(line.child[1].child[0].text),
		name: line.child[3].child[0].text,
		language: line.child[5].child[0].text,
		exercices: Number(line.child[7].child[0].text),
		lastAnswer: line.child[9].child[0].text,
		school: line.child[11].child ? line.child[11].child[0].text : undefined
	}))

const writeResults = data => new Promise((resolve, reject) => {
	Fs.writeFile('./scripts/result.json', JSON.stringify(data, null, '\t'), error => {
		if (error) return reject(error)
	})
	
	resolve()
})

const fetchPage = page => new Promise((resolve, reject) => {
	console.log('Fetch page ', page)

	Axios.get('https://battledev.blogdumoderateur.com/table_general.php', {
		params: {
			type: 'json',
			rang: 'asc',
			page
		}
	})
		.then(result => {
			if (!result.data.table_tbody) return resolve([])

			const lines = htmlToJson(result.data)

			fetchPage(page + 1)
				.then(nextLines => {
					return resolve(lines.concat(nextLines))
				})
				.catch(reject)
		})
		.catch(reject)
})

fetchPage(1)
	.then(writeResults)
	.then(() => {
		console.log('Results writed !')
	})
	.catch(console.error)