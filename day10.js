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
