function reverse(str) {
	var reverseStr = "";
	for(var i=str.length-1; i>=0; i--){
		reverseStr += str[i];
	}
	console.log(reverseStr);
}


function reverse2(str) {
	var reverseStr = "";
	var i=str.length-1;
	while(i>=0){
		reverseStr += str[i];
		i--;
	}
	console.log(reverseStr);
}

reverse("yoyoyo");
reverse("1abc2");
reverse("1,2,3,2,1");
reverse("");

console.log("--------")

reverse2("yoyoyo");
reverse2("1abc2");
reverse2("1,2,3,2,1");
reverse2("");
