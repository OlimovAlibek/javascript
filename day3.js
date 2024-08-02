const order = (str) => str.split('').sort().join('')

console.log(order('ahfsmsfnsbc'))



const count = (str) => {
    let counter = 0
    const vowels = ['a', 'o', 'u', 'i', 'e']
    const splitted = str.toLowerCase().split('')
    for (let i = 0; i<splitted.length; i++) {
        if (vowels.includes(splitted[i])) {
            counter++
        }
    }
    return counter
}

console.log(count('aAlibekaaaddd'))



const coinCounter = (number = 130, coins = [1,5,10, 50, 25]) => {
    // let changedNumber = 0
    let newArray = []
    
    let sortedCoins = coins.sort((a,b) => b-a) 
    console.log(sortedCoins)
    
    for(let i = 0; i<sortedCoins.length; i++) {
        while (sortedCoins[i] <= number) {
            newArray.push(sortedCoins[i])
            number = number - sortedCoins[i]
        }
    }
    return newArray
}

console.log(coinCounter())



const gcd = (a,b) => {
    while (a !== b) {
        if (a > b) {
            a = a - b
        }
        if (b > a) {
            b = b-a
        }
    }
    return a
}

console.log(gcd(48, 18))




const unique = (str) => {
   let uniqueChar = new Set()
   
   for(let char of str) {
       uniqueChar.add(char)
   }
   
   return uniqueChars = [...uniqueChar].join('')
}

console.log(unique('aaabbbbcccd'))



const uniqueI = (str) => 
    str.split('').filter((e => str.indexOf(e) === str.lastIndexOf(e)))


console.log(uniqueI('aaabbbbcccd'))



// 



function seatsInTheater(nCols, nRows, col, row) {
    return surface = (nCols-col+1)*(nRows-row)
}

console.log(seatsInTheater(16,11,5,3))


function points(games) {
    let pointss = 0
    for(let i = 0; i < games.length; i++) {
        let [x, y] = games[i].split(':').map(Number)
        
        if (x > y) {
            pointss += 3
        }
        else if (x === y) {
            pointss += 1
        }
    }
    return pointss
    
}
    
console.log(points(['1:0', '3:2', '4:5', '1:1']))
