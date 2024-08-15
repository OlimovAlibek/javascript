function folding(a, b) {
  let count = 0
  
  while (a > 0 && b > 0) {
    count += Math.floor(a/b)
    
    let temp = a % b
    a = b
    b = temp
    
    
    
  }
  return count
  

}

folding(96,64)

