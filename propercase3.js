function propercase(inputstr){
	console.log("User Input: " +inputstr);
	inputstr=inputstr.toLowerCase();
	inputstr=inputstr.split(' ');
	

	for(var v= 0 ; v<inputstr.length; v++ ){
	inputstr[v] = inputstr[v].charAt(0).toUpperCase() + inputstr[v].slice(1);
	}
	
	var output = inputstr.join(' ');
	console.log("output: " + output);
}


propercase("hey, this is vismay!");