const optimize = (n, m) => {
    let memo = m.map(x => x.map(y => null));
    const f = (min, max) => {
        if(min >= max) return 0;
        if(memo[min][max] != null) return memo[min][max];

        let score = 0;
        for(let i = min; i <= max; i++) {
            score = Math.max(score, m[min][i] + f(min+1, i-1) + f(i+1, max));
        }
        memo[min][max] = score;
        return score;
    }
    return f(0, n-1);
}

const contestResponse = input => {
    const terminusCount = Number(input[0]);
    const matrix = input
        .slice(1)
        .map(x => x
            .split(" ")
            .map(Number));
    return optimize(terminusCount, matrix)
}

module.exports = contestResponse