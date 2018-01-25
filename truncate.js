function truncateString(str, len) {
  var array = str.split(" ")
  if((str.typeof !== 'string') || (ln.typeof !== 'number')) {
    console.log(array.slice(array, len).join(" "))
  } else {
    return new Error("First argument must be string, second argument must be number")
  }
}
console.log(truncateString("I have no idea if this works.", 6))



// Noel's solution:
function truncateString(str, len) {
  var array = str.split(" ")
  var result = ''
  for(var i = 0; i < len; i++) {
    result += array[i]
  }
  return result
}

// one liner:
function truncateString(str, len) {
  if(str.constructor === String && len.constructor === Number) {
    return str.split('').splice(0, len).join('') + '...' 
  } else {
    return new Error("Argument types incorrect: str=String, len=Number")
  }
}
console.log(truncateString("I have no idea if this works.", 6))
console.log(truncateString(9, "Hello, world!!!"))