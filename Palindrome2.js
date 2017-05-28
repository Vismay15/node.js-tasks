function palindrome (inputstr){

	console.log("User input: " + inputstr)

	var reversed = inputstr.split('').reverse().join('');

	if (inputstr == reversed) {
		console.log("the given string is a palindrome");
		return;
	};
	console.log("the given string is NOT a palindrome");

}

palindrome("1111111");