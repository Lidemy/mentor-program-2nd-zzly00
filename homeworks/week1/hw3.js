function reverse(str) {
	var reverseStr = "";
	for(var i=str.length-1; i>=0; i--){
		reverseStr += str[i];
	}
	return reverseStr;
}


function reverse2(str) {
	var reverseStr = "";
	var i=str.length-1;
	while(i>=0){
		reverseStr += str[i];
		i--;
	}
	return reverseStr;
}

console.log(reverse("yoyoyo"));
console.log(reverse("1abc2"));
console.log(reverse("1,2,3,2,1"));
console.log(reverse(""));

console.log("--------")

console.log(reverse2("yoyoyo"));
console.log(reverse2("1abc2"));
console.log(reverse2("1,2,3,2,1"));
console.log(reverse2(""));
