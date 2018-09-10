function isPalindromes(str) {
  for(var i=0; i<str.length; i++){
  	if(str[i] != str[str.length-i-1]){
  		return false;
  	}
  }
  return true;
}

module.exports = isPalindromes
