function replacepara(inputString){
	
	console.log("User Input: " + inputString + " \n");

	var par1= /&amp;/g; //parameter 1 to be replaced
	var par2= /&/g; //parameter 2 to be replaced
	var par3=/'/g; //parameter 3 to be replaced
	var result1= inputString.replace(par1,"&");
	var result2=result1.replace(par2,"and");
	var result3 = result2.replace(par3,"&quot;");
	console.log("Outpot \n");
	console.log(result3);
}


replacepara(" Macbook pro &amp; macbook' air are laptops. The other' products of apple include' iphone &amp; ipad &amp; ios' and &amp; mackintosh");