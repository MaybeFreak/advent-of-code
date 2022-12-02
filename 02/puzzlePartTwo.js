const input = require('./puzzleinput.js').input

const outcomes = {
    win: ['A Y', 'B Z', 'C X'],
    draw: ['A X', 'B Y', 'C Z'],
    lose: ['A Z', 'B X', 'C Y']
}

const choice = {
    win: {
        A: 2,
        B: 3,
        C: 1
    },
    draw: {
        A: 1,
        B: 2,
        C: 3
    },
    lose: {
        A: 3,
        B: 1,
        C: 2
    }
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
        if (element[2] === 'Z') {
            console.log('win')
            roundScore += 6
            roundScore += choice.win[element[0]]
        } else if (element[2] === 'Y') {
            roundScore += 3
            roundScore += choice.draw[element[0]]
        } else if (element[2] === 'X') {
            roundScore += 0
            roundScore += choice.lose[element[0]]
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
    funcInput = totalScore(funcInput)
    return funcInput
}

console.log(getTotalScore(input))