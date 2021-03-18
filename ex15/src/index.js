function myForLoop1() {
    var evenNumbers = "";
    for (var i = 0; i <= 8; i += 2) {
        evenNumbers += i;
        if (i < 8)
            evenNumbers += ","
      
    }
    return evenNumbers;
}

function myForLoop2() {
    var evenNumbers = "";
    for (var i = 8; i >= 0; i -= 2) {
        evenNumbers += i;
        if (i > 0)
            evenNumbers += ","
       
    }
    return evenNumbers;
}

console.log(myForLoop1())
console.log(myForLoop2())

module.exports = {
    myForLoop1,
    myForLoop2,
};