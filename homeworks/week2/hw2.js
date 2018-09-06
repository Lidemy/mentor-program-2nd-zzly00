/*
// 1
function alphaSwap(str) {
	var strArr = str.split("");
	var newStr = [];
	for(var i=0; i<strArr.length; i++){
		var letter = strArr[i];
		newStr.push(letter===letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase());
	}
	return newStr.join("");
}

module.exports = alphaSwap
*/

// 2
function alphaSwap(str) {
	return str.split("").map(n => {
		return n===n.toUpperCase() ? n.toLowerCase() : n.toUpperCase();
	}).join("");
}

module.exports = alphaSwap
