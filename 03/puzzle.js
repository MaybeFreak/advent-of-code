const input = require('./puzzleinput.js').input

const string = `a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z`

const makePrioList = (string) => {
    let output = {}
    let value = 1
    string.split(`, `).forEach(element => {
        output[element] = value
        value++
    })
    string.split(`, `).forEach(element => {
        output[element.toUpperCase()] = value
        value++
    })
    return output
} 

const getBags = (input) => {
    const bags = []
    input.split('\n').forEach(element => {
        bags.push(element)
    })
    return bags
}

const splitBags = (input) => {
    let comp1 = []
    let comp2 = []
    input.forEach(element => {
        const pushcomp1 = []
        for (let i = 0; i < element.length/2; i++) {
            pushcomp1.push(element[i])
        } 
        const pushcomp2 = []
        for (let i = element.length/2; i < element.length; i++) {
            pushcomp2.push(element[i])
        }
        comp1.push(pushcomp1)
        comp2.push(pushcomp2)
    })
    return {comp1: comp1, comp2: comp2}
}

const checkComps = (input) => {
    const input1 = input.comp1
    const input2 = input.comp2
    const items = []
    for (let i = 0; i < input1.length; i++) {
        for (let j = 0; j < input1[i].length; j++) {
            if (input2[i].includes(input1[i][j])) {
                items.push(input1[i][j])
                break
            }
        }
    }
    return items
}

const getGroups = (input) => {
    const groups = []
    for (let i = 0; i < input.length; i += 3) {
        groups.push([input[i],
                    input[i + 1],
                    input[i + 2]])
    }
    return groups
}

const getBadges = (input) => {
    const badges = []
    input.forEach(element => {
        for (let i = 0; i < element[0].length; i++) {
            if (element[1].includes(element[0][i]) && 
                element[2].includes(element[0][i])) {
                    badges.push(element[0][i])
                    break
                }
        }
    })
    return badges
}

const getValue = (input) => {
    const prioList = makePrioList(string)
    let value = 0
    input.forEach(element => {
        value += prioList[element]
    })
    return value
}

const getResultPartOne = (input) => {
    let funcinput = input
    funcinput = getBags(funcinput)
    funcinput = splitBags(funcinput)
    funcinput = checkComps(funcinput)
    return getValue(funcinput)
}

const getResultPartTwo = (input) => {
    let funcinput = input
    funcinput = getBags(funcinput)
    funcinput = getGroups(funcinput)
    funcinput = getBadges(funcinput)
    return getValue(funcinput)
}

console.log(getResultPartTwo(input))