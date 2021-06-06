const getAsteroidsOnPeriod = (asteroids, start, end) => {
    let count = 0

    for (let i = start; i < end; i++) {
        count += asteroids[i]
    }

    return count
}

const contestResponse = input => {
    const [duration, activation, cooldown] = input[0].split(' ').map(Number)
    const shieldDuration = activation + cooldown

    const asteroids = input[1].split(' ').map(Number).concat(new Array(shieldDuration).fill(0))
    const totalAsteroids = asteroids.reduce((a, b) => a + b)

    const absorptions = new Array(duration + shieldDuration).fill(0)

    let absorption = getAsteroidsOnPeriod(asteroids, 0, activation)
    let maxAbsorption = 0

    for (let i = shieldDuration; i < absorptions.length; i++) {
        const bestOfPreviousAbsoption = Math.max(absorptions[i - shieldDuration], absorptions[i - shieldDuration - 1] || 0)

        absorptions[i - shieldDuration] = bestOfPreviousAbsoption
        absorptions[i] = absorption + bestOfPreviousAbsoption

        if (absorptions[i] > maxAbsorption) maxAbsorption = absorptions[i]

        absorption = absorption + asteroids[i - cooldown] - asteroids[i - shieldDuration]
    }

    return totalAsteroids - maxAbsorption
}

module.exports = contestResponse