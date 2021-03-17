function myEqualFunction(num) {
  if (num === 23) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(myEqualFunction('23'));

module.exports = myEqualFunction
