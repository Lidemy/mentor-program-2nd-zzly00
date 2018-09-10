function add(a, b) {
  var arrA = a.split("").reverse();
  var arrB = b.split("").reverse();
  var arrSum = [];
  var length = arrA.length-arrB.length;

  // 長度不同時，補0
  if(length>0){
  	for(var i=0; i<length; i++){
  		arrB.push("0")
  	}
  }else{
  	for(var i=0; i<length*-1; i++){
  		arrA.push("0")
  	}
  }

  // 溢位預設為0，數字相加
  var overflow = 0;
  for(var i=0; i<arrA.length; i++){
  	var sum = Number(arrA[i])+Number(arrB[i])+overflow;
  	if(sum>9){
  		arrSum.push(sum-10);
  		overflow = 1;
  	}else{
  		arrSum.push(sum);
  		overflow = 0;
  	}
  }

  // 處理最後一個數字的溢位
  if(sum>9){
	arrSum.push(1);
  }
  return arrSum.reverse().join("")
}

module.exports = add;
