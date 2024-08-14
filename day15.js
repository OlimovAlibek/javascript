function properFractions(n) {
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function eulerTotient(n) {
    let result = n;
    for (let p = 2; p * p <= n; p++) {
      if (n % p === 0) {
        while (n % p === 0) {
          n /= p;
        }
        result -= result / p;
      }
    }
    if (n > 1) {
      result -= result / n;
    }
    return result;
  }

  return eulerTotient(n);
}


function isItLetter(character) {
  const regEx = /^[a-zA-Z]$/;
  return regEx.test(character);
}

// Example usage
console.log(isItLetter('a')); // true
console.log(isItLetter('Z')); // true
console.log(isItLetter('1')); // false
console.log(isItLetter('*')); // false
console.log(isItLetter('abc')); // false (because it's more than one character)


function isItLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

// Example usage
console.log(isItLetter('a')); // true
console.log(isItLetter('Z')); // true
console.log(isItLetter('1')); // false
console.log(isItLetter('*')); // false


function doubleEveryOther(arr) {
  // Iterate through the array, starting at the second element (index 1)
  for (let i = 1; i < arr.length; i += 2) {
    arr[i] *= 2; // Double the element at index i
  }
  return arr; // Return the modified array
}

// Example usage
console.log(doubleEveryOther([1, 2, 3, 4])); // [1, 4, 3, 8]
console.log(doubleEveryOther([10, 15, 20, 25])); // [10, 30, 20, 50]
