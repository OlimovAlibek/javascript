function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart - bluePulled)/((blueStart - bluePulled) + (redStart - redPulled))
}


function firstNonConsecutive (arr) {
//     for(let i = 0; i < arr.length - 1; i++) {
//       if (arr[i+1] !== arr[i] + 1) {
//         return arr[i+1]
//       }
//     }
//   return null


const NonConsecutive = arr.find((item, index) => index !== 0 && arr[index - 1] + 1 !== arr[index])
return NonConsecutive
}


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const milesLeft = mpg*fuelLeft
  return milesLeft >= distanceToPump
};


const users = [{
id: "e0aafb31-8ac6-48d4-99ee-12af8ddcbdae",
email: "tcasaletto0@soundcloud.com",
ip_address: "53.215.156.73"
}, {
id: "a7b0221d-5228-4992-a964-b5f3e3d7a022",
email: "nmoffett1@paginegialle.it",
ip_address: "34.81.219.4"
}, {
id: "1019b52c-db9d-45a2-975f-404455925a6a",
email: "rcrampin2@yale.edu",
ip_address: "65.181.114.151"
}, {
id: "e8637c3b-645d-4742-a463-d2006742606f",
email: "ddreinan3@smugmug.com",
ip_address: "136.171.217.116"
}, {
id: "a20803f2-c372-4f39-97b1-d8e948151c8c",
email: "gdorkin4@taobao.com",
ip_address: "220.228.4.97"
}, {
id: "63f8e789-009d-4e7b-ad6b-cc8c8a1d1248",
email: "vhucquart5@typepad.com",
ip_address: "101.212.0.49"
}, {
id: "74120248-03b5-4888-84c0-d1a459c6273b",
email: "vsircombe6@marriott.com",
ip_address: "28.180.205.167"
}, {
id: "412a0669-7171-48b4-95eb-e898993ec1dc",
email: "kdesouza7@t.co",
ip_address: "61.44.195.62"
}, {
id: "6cd04ecc-8316-4542-9faa-b8438e82b4ad",
email: "sbehnke8@booking.com",
ip_address: "1.176.238.27"
}, {
id: "cfdf5009-84d3-4599-88c0-048c4fcae2ed",
email: "clindsell9@nymag.com",
ip_address: "44.37.119.76"
}];
/**
 * Exercise 01
 * 
 * Check whether every email address in the list of users is valid (get a true or false value)
 */
 
 console.log(users.every(user => /[^@]+@[^\.]+\..+/.test(user.email)))
 
 
 
 
 
 
/**
 * Exercise 02
 * 
 * Find out how many users have an IP address in a Class A network
 * https://en.wikipedia.org/wiki/Classful_network
 */
 
 console.log(users.filter(({ip_address}, index) => (ip_address.split('.')[0] > 128)))
 
 
 
/**
 * Exercise 03
 * 
 * Find the position in the array of the first  user object that has a Class B IP address
 */
 
 console.log(users.findIndex(({ip_address}) => ip_address.split('.')[0] > 128))
 
/**
 * Exercise 04
 * 
 * Find the user object that has the 'soundcloud' email address
 */
 
 console.log(users.filter(user => user.email.includes("soundcloud")))
 
 
 
/**
 * Exercise 05
 * 
 * Replace all the items in the array with a string value of 'deleted'
 */
 
 
 
console.log(users.fill('deleted'))

console.log(users.forEach((index) => {users[index] = "deleted"}))

console.log(users.map(()=> "deleted"))
