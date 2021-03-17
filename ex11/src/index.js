function switchCase(letter) {
  var animals = "stuff";
  switch (letter) {
    case "a":
      animals = "antelope";
      break;
    case "b":
      animals = "bird";
      break;
    case "c":
      animals = "cat";
      break;
    default:
      animals = "stuff";
      break;
  }

  return animals;
}
console.log(switchCase("1")); //
module.exports = switchCase;
