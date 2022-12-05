const input = require('./puzzleinput.js').input

const getPairs = (input) => {
    const pairs = []
    input.split(`\n`).forEach(element => {
        const pair = []
        element.split(`,`).forEach(element => {
            const ids = []
            element.split(`-`).forEach(element => {
                ids.push(Number(element))
            })
            pair.push(ids)
        })
        pairs.push(pair)
    });
    return pairs
}

const lookForOverlap = (input) => {
    let overlappingPairs = 0
    input.forEach(element => {
        if (element[0][0] >= element[1][0] && element[0][1] <= element[1][1]) {
            ++overlappingPairs
        } else if (element[1][0] >= element[0][0] && element[1][1] <= element[0][1]) {
            ++overlappingPairs
        }
    })
    return overlappingPairs
} 

const lookForAnyOverlap = (input) => {
    let overlappingPairs = 0
    input.forEach(element => {
        if (element[0][0] >= element[1][0] && element[0][1] <= element[1][1] ||
            element[1][0] >= element[0][0] && element[1][1] <= element[0][1]) {
            ++overlappingPairs
            console.log(element)
        } else if (element[0][0] <= element[1][0] && element[0][1] >= element[1][0] ||
                   element[1][0] <= element[0][0] && element[1][1] >= element[0][0] ||
                   element[0][0] <= element[1][1] && element[0][1] >= element[1][1] ||
                   element[1][0] <= element[0][1] && element[1][1] >= element[0][1]) {
            ++overlappingPairs
            console.log(element)
        }
    })
    return overlappingPairs
}

const getResultOne = (input) => {
    let funcinput = input
    funcinput = getPairs(funcinput)
    return lookForOverlap(funcinput)
}

const getResultTwo = (input) => {
    let funcinput = input
    funcinput = getPairs(funcinput)
    return lookForAnyOverlap(funcinput)
}

console.log(getResultTwo(input))