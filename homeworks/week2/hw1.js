/*
// 方法1
function stars(n) {
	var star = "";
	var stars = [];
	for(var i=0; i<n; i++){
		stars.push(star += "*");
	}
	return stars;
}

module.exports = stars;
*/

// 方法2
function stars(n) {
	var stars = [];
	for(var i=0; i<n; i++){
    	stars.push("*".repeat(i+1));
	}
	return stars;
}

module.exports = stars;