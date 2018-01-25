function truncateString(str, len) {
  var array = str.split(" ")
  if((str.typeof !== 'string') || (ln.typeof !== 'number')) {
    console.log(array.slice(array, len).join(" "))
  } else {
    return new Error("First argument must be string, second argument must be number")
  }
}

truncateString("I have no idea if this works.", 3)