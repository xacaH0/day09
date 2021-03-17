function switchCaseSequential(num) {
  var answer = "";
  switch (num) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
console.log(switchCaseSequential(7));
module.exports = switchCaseSequential;
