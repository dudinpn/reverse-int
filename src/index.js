module.exports = function reverse(n) {
    var nStr = n.toString();
    let arr = nStr.split("");
    let arrRev = arr.reverse();
    let answer = arrRev.join("");

    return parseInt(answer);
  
};
