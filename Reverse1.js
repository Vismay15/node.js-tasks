function reverse (input) {
	console.log("input string :" + input);
    var  newstr = '';
    for( var i =input.length -1; i>=0 ; i-- ){
        newstr = newstr + input[i];
    }
    return newstr;
}

console.log("Output " + reverse("this is macbook air"));
