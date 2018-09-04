function join(str, concatStr) {
	var output = str[0];
	for(var i=1; i<str.length; i++){
		output += concatStr+str[i];
	}
	return output;
}

function repeat(str, times) {
	var output = "";
	for(var i=0; i<times; i++){
		output += str;
	}
	return output;
}



console.log(join([1, 2, 3], ''));
console.log(join(["a", "b", "c"], "!"));
console.log(join(["a", 1, "b", 2, "c", 3], ','));

console.log("--------");

console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));