// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const newString = (str) => {
    newWord = str[0] + str[1] + str[2] + str[str.length - 1] + str[str.length - 2] + str[str.length - 3]
    
    console.log(newWord)
}



const makeNewString = (str) => str.length < 3 ? str : str.slice(0,3) + str.slice(-3)
console.log(makeNewString('qwertyuz'))


const halfString = (str) => str.length % 2 === 0 ? str.slice(0, str.length/2) : "String is odd"

console.log(halfString('alibekk'))



function near(a,b) {
    const newA = 100 - a
    const newB = 100 - b
    
    if (newB > newA) {
        return a
    } else return b
}

console.log(near(8,7))


function counter(string, char) {
   const length = string.split('').filter(letter => letter === char).length
   
   return length >= 2 && length <=4
    
}

console.log(counter('alialibek', 'e'))



function numberIdentifier(numbers, number) {
    return numbers.filter(ch => ch >= number)
}

console.log(numberIdentifier([1, 2, 3, 4], 3))


const func = (strings, word) => {
    return strings.filter(ch => !ch.includes(word))
}

console.log(func(["asd", "asf", "qwe"], "as"))
