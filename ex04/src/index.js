function compareDifferentValues(m, n) {
  if (m === n) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareDifferentValues("8", "8"));
module.exports = compareDifferentValues;
