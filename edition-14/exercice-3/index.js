const ERROR_RESPONSE = 'pas possible'

const contestResponse = input => {
	const [cableAmount, requestAmount] = input[0]
		.split(' ')
		.map(Number)

	const cablesAvailability = new Array(cableAmount).fill(true)

	const getFirstCableNotTaken = () => cablesAvailability.findIndex(x => x)

	const requests = input
	    .slice(1)
	    .map(x => x.split(' ').map(Number))
	    .map(x => ({
			start: x[0],
			end: x[1],
			number: null
		}))

	const datesSet = new Set()

	requests.forEach(request => {
		datesSet.add(request.start)
		datesSet.add(request.end)
	})

	const datesArray = Array.from(datesSet).sort((a, b) => a - b)

	const requestsResult = datesArray.reduce((result, date) => {
		if (result === ERROR_RESPONSE) return result

		for (let i = 0; i < requests.length; i++) {
			const request = requests[i]
			if (request.end === date) {
				cablesAvailability[request.number] = true
			}
		}

		for (let i = 0; i < requests.length; i++) {
			const request = requests[i]
			if (request.start === date) {
				const cable = getFirstCableNotTaken()
				if (cable === -1) return ERROR_RESPONSE
				
				cablesAvailability[cable] = false
				request.number = cable
				result.push(cable + 1)
			}
		}

		return result
	}, [])

	const response = requestsResult === ERROR_RESPONSE ? requestsResult : requestsResult.join(' ')
	
	return response
}

module.exports = contestResponse