function printFactor(n) {
	for(var i=1; i<=n; i++){
		if(n%i === 0){
			console.log(i);
		}
	}
}


function printFactor2(n) {
	var i=1;
	while(i<=n){
		if(n%i === 0){
			console.log(i);
		}
		i++;
	}
}


printFactor(10);
printFactor(7);

console.log("--------")

printFactor2(10);
printFactor2(7);