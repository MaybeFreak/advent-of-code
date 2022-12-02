const input = require('./puzzleinput.js').input

const outcomes = {
    win: ['A Y', 'B Z', 'C X'],
    draw: ['A X', 'B Y', 'C Z'],
    lose: ['A Z', 'B X', 'C Y']
}

const choice = {
    X: 1,
    Y: 2,
    Z: 3
}

const splitRounds = (input) => {
    const rounds = []
    input.split('\n').forEach(element => {
        rounds.push(element)
    });
    return rounds
}

const getRoundScore = (input) => {
    const roundScores = []
    input.forEach(element => {
        let roundScore = 0
        if (outcomes.win.includes(element)) {
            roundScore += 6
            roundScore += choice[element[2]]
        } else if (outcomes.draw.includes(element)) {
            roundScore += 3
            roundScore += choice[element[2]]
        } else if (outcomes.lose.includes(element)) {
            roundScore += 0
            roundScore += choice[element[2]]
        }
        roundScores.push(roundScore)
    })
    return roundScores
}

const totalScore = (input) => {
    let sum = 0
    input.forEach(element => {
        sum += element
    })
    return sum
}

const getTotalScore = (input) => {
    let funcInput = input
    funcInput = splitRounds(funcInput)
    console.log(funcInput)
    funcInput = getRoundScore(funcInput)
    console.log(funcInput)
    return totalScore(funcInput)
}

console.log(getTotalScore(input))