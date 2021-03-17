function logicalAndOperator(num) {
  if (num <= 80 && num >= 40) {
    return "Yes";
  }
  return "No";
}
console.log(logicalAndOperator(100));
module.exports = logicalAndOperator;
