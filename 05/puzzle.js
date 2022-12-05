const initalCargoArea = require('./puzzleinput.js').initalCargoArea
const commands = require('./puzzleinput.js').commands
let newCargoArea = initalCargoArea

const findMoves = (input) => {
    const commands = []
    input.split(`\n`).forEach(element => {
        const line = element.split(` `)
        const step = {}
        for (let i = 0; i < line.length; i += 2) {
            step[line[i]] = line[i + 1]
        }
        commands.push(step)
    })
    return commands
}

const moveBoxes = (input) => {
    input.forEach(element => {
        for (let i = element.move; i > 0; i--) {
            newCargoArea[element.to].unshift(newCargoArea[element.from].shift())
        }
    })
}

const moveManyBoxes = (input) => {
    input.forEach(element => {
        const holding = []
        for (let i = element.move; i > 0; i--) {
            holding.unshift(newCargoArea[element.from].shift())
        }
        for (let i = element.move; i > 0; i--) {
            newCargoArea[element.to].unshift(holding.shift())
        }
    })
}

const getTopBoxes = () => {
    let topBoxes = ''
    const areas = Object.getOwnPropertyNames(newCargoArea)
    const boxes = Object.values(newCargoArea)
    for (let i = 0; i < areas.length; i++) {
        topBoxes += boxes[i][0]
    }
    return topBoxes
}

const run = () => {
    moveManyBoxes(findMoves(commands))
    console.log(newCargoArea)
    return getTopBoxes()
}

console.log(run())