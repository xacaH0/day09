function checkSign(num){
    return (num > 0) ? "positive":
    (num < 0) ? "negative"
    : "zero";
}
console.log(checkSign(-12));
module.exports = checkSign;