/*
//方法一
function isPrime(n){
	if(n<2){
		return false;
	}else{
		for(var i=2; i<n; i++){
			if(n%i === 0){
				return false;
			}
		}
		return true;
	}
}

module.exports = isPrime
*/

//方法二
function isPrime(n) {
  for(var i=2; i<=n; i++){
  	if(n%i != 0){
  		continue;
  	}else if(i===n){
  		return true;
  	}else{
  		return false;
  	}
  }
  return false;
}

module.exports = isPrime
