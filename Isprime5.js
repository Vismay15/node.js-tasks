function checkPrime(inputNum){
	console.log("User Input: "+inputNum);
	for(var i=2; i<= inputNum/2; i++){
		var reminder=inputNum%i;
		if(reminder==0) {
			console.log(inputNum + " is a not prime number");
			return;
		};
		
	}
	console.log(inputNum + " is a prime number!")

}

checkPrime(29);