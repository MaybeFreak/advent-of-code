const input = require("./puzzleinput").input;

const inputToArray = (input) => {
    let output = ''
    input.split('\n').forEach(element => {
        output += element.toString() + ' '
    });
    console.log(output)
    return output
}

const seperateInventories = (input) => {
    const arrayOfInventories = []
    input.split('  ').forEach(element => {
        arrayOfInventories.push(element)
    })
    console.log(arrayOfInventories)
    return arrayOfInventories
}

const getSum = (input) => {
    const arrayOfSums = []
    for (let i = 0; i < input.length; i++) {
        let sum = 0
        input[i].split(' ').forEach(element => {
            sum += Number(element)
        })
        arrayOfSums.push(sum)
    }
    console.log(arrayOfSums)
    return arrayOfSums
}

const findHighestNum = (input) => {
    let highestNum = 0
    input.forEach(element => {
        if (element > highestNum) {
            highestNum = element
        }
    })
    console.log(highestNum)
    return highestNum
}

const findSumOfTopThree = (input) => {
    let top1 = 0
    let top2 = 0
    let top3 = 0
    input.forEach(element => {
        if (element > top1) {
           top3 = top2
            top2 = top1
            top1 = element
        } else if (element > top2) {
            top3 = top2
            top2 = element
        } else if (element > top3) {
            top3 = element
        }
    })
    const sum = top1 + top2 + top3
    console.log(top1, top2, top3)
    console.log(sum)
    return sum
} 

const getHighestNum = () => {
    return findHighestNum(getSum(seperateInventories(inputToArray(input))))
}

const getSumOfTopThree = () => {
    return findSumOfTopThree(getSum(seperateInventories(inputToArray(input))))
}

getSumOfTopThree()