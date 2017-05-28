function  checkpalindrome(inputnumber){

	console.log("User input " + inputnumber);
	var totalpalindromes=0;

	for(var i=2; i<inputnumber; i++){
		var numtocheck=i;
		var numtoStr=numtocheck.toString().split('').reverse().join('');
		var reversedNum=parseInt(numtoStr);
		if(numtocheck==reversedNum){
			totalpalindromes++;
		}

	}
console.log("total palindromes between 1 to " + inputnumber + " are --> "+totalpalindromes); 

}

checkpalindrome(50000);

//var userinput= prompt(" Please provide the number to count number of palindromes");




//var foo = prompt("Give me input");