var _ = require('lodash')

var numbers = [1,2,3,4,5,6,7]

function findTotal(array){
    let total = 0
    for(let i = 0 ; i < array.length; i++){
        total += array[i];
    }
    return total;
}

console.info("starting the demo")

let array = _.shuffle(numbers)

let total = findTotal(array)

console.debug(`total is : ${total}`)

let listOfNumbers = ''

_.each(array, (a)=> listOfNumbers += a +' ')

console.log(listOfNumbers)
