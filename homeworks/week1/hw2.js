function capitalize(str) {
	return str.replace(str[0], str[0].toUpperCase());
}

function capitalize2(str) {
	return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
}

function capitalize3(str) {
	return !str ? "" : str[0].toUpperCase()+str.slice(1);
}

console.log(capitalize("nick"));
console.log(capitalize("Nick"));
console.log(capitalize(",hello"));
console.log(capitalize(" "));

console.log(capitalize("--------"));

console.log(capitalize2("nick"));
console.log(capitalize2("Nick"));
console.log(capitalize2(",hello"));

console.log(capitalize("--------"));

console.log(capitalize3("nick"));
console.log(capitalize3("Nick"));
console.log(capitalize3(",hello"));
console.log(capitalize3(""));