const POW_2_32 = 2 ** 32
const POW_2_16 = 2 ** 16
const POW_31_5 = 31 ** 5

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const getHash = pseudo => {
    const N = pseudo.length
    let result = 0n

    for (let i = 0; i < N; i++) {
        const code = BigInt(pseudo.charCodeAt(i))
        const coef = 31n ** BigInt(N - (i + 1))
        result += ((code * coef) % BigInt(POW_2_32))
    }

    return result % BigInt(POW_2_32)
}

const generatePseudosRecursive = (chars, hashToFind, pseudo) => {
    if (pseudo.length === 100) return false

    for (const i in chars) {
        if (hash(pseudo + chars[i]) === hashToFind) return pseudo + chars[i]
    }

    for (const i in chars) {
        const result = generatePseudosRecursive(chars, hashToFind, pseudo + chars[i])
        if (result) return result
    }

    return false
}

const generatePseudos = (chars, hashToFind) => {
    return generatePseudosRecursive(chars, hashToFind, '')
}

const createRandomString = (chars, length) => {
    let s = ''
    for (let i = 0; i < length; i++) {
        s += chars[Math.floor(Math.random() * chars.length)]
    }
    return s
}

const contestResponse = input => {
    const targetHash = getHash(input[0])

    const lookUpTable = {}
    for (let i = 0; i < POW_2_16; i++) {
        const randomText = createRandomString(CHARSET, 5)
        const hash = getHash(randomText)
        lookUpTable[hash] = randomText
    }

    let found = ''

    while(!found) {
        const randomText = createRandomString(CHARSET, 5)
        const hash = (BigInt(POW_31_5) * getHash(randomText)) % BigInt(POW_2_32)
        const candidate = (targetHash - hash) % BigInt(POW_2_32)

        if (lookUpTable[candidate]) found = randomText + lookUpTable[candidate]
    }

    return targetHash === getHash(found)
}

module.exports = contestResponse