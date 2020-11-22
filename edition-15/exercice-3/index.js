const MINUTES_IN_HOURS = 60
const MINUTES_IN_SLOT = 59
const DAY_START = 8 * MINUTES_IN_HOURS
const DAY_END = 17 * MINUTES_IN_HOURS

const parseSlot = line => {
	const [day, hours] = line.split(' ')
	const [start, end] = hours.split('-')
	const [startHours, startMinutes] = start.split(':')
	const [endHours, endMinutes] = end.split(':')

	return {
		day: Number(day),
		start: Number(startHours) * MINUTES_IN_HOURS + Number(startMinutes),
		end: Number(endHours) * MINUTES_IN_HOURS + Number(endMinutes)
	}
}

const normalizeNumber = value => Math.floor(value).toString().padStart(2, '0')

const slotStartToString  = start => {
	const end = start + MINUTES_IN_SLOT
	const startHours = normalizeNumber(start / MINUTES_IN_HOURS)
	const startMinutes = normalizeNumber(start % MINUTES_IN_HOURS)
	const endHours = normalizeNumber(end / MINUTES_IN_HOURS)
	const endMinutes = normalizeNumber(end % MINUTES_IN_HOURS)
	return `${startHours}:${startMinutes}-${endHours}:${endMinutes}`
}

const contestResponse = input => {
	const slots = input
		.slice(1)
		.map(parseSlot)

	const slotsByDay = {}

	slots.forEach(slot => {
		if (!slotsByDay[slot.day]) slotsByDay[slot.day] = []
		slotsByDay[slot.day].push(slot)
	})

	let slotStartFound
	let day = 0
	let currentStart

	while (!slotStartFound) {
		day++
		currentStart = DAY_START

		const daySlots = slotsByDay[day] || []

		while (!slotStartFound && (currentStart <= DAY_END)) {
			if (daySlots.every(slot => slot.end < currentStart || slot.start > (currentStart + MINUTES_IN_SLOT))) {
				slotStartFound = currentStart
			}

			currentStart++
		}
	}

	return `${day} ${slotStartToString(slotStartFound)}`
}

module.exports = contestResponse