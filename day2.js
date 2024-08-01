function checkLeapYear(year) {
    return year % 4 === 0 ? "It is leap" : "Not leap"
}
console.log(checkLeapYear(2031))  




const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, b: 1, c: 1};
const objC = { a: 1, b: 1, d: 1 };

const containsCheck = (obj1, obj2) => 
    Object.keys(obj1).every(key => obj2[key])
    

console.log(containsCheck(objB, objC))


const csv = `abc, def, ghi
jkl, mno, pqr
stu, vwx, yza`

const array2D = (csv) => csv.split('\n').map(row => row.split(','))

console.log(csv)
console.log(array2D(csv))


const randomNumber = () => 
Math.floor(Math.random() * 16).toString(16)

const randomColor = () => {
    let hex = '#'
    for (let i=0; i<6; i++) {
        hex = hex + randomNumber()
    }
    return hex
}
console.log(randomColor())



const check = (arr, fc) => {
    for (let i = 0; i < arr.length; i++) {
        if (!fc(arr[i])) {
            return false
        }
    }
    return true
}

console.log(check([1,2,3,4,5], (x) => x > 0))

console.log([1,2,3,4,5].every(x => x > 5))


console.log([1,2,3,4,5].every(x => x % 2 === 0))

const check1 = (arr, func) => {
 for (let i=0; i<arr.length; i++) {
     if (!(func(arr[i]))) {
         return false
     }
     
 }
 return true
}
 
 console.log(check1([2,4], x => x%2===0))
