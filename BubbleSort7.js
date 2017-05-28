function bubble_sort(inputArray){

	console.log("Input Array: " + inputArray);
	var len=inputArray.length;

	for(var i=0; i<len-1; i++){
		
		for(var j=0; j<len-i-1; j++){
			
			if(inputArray[j]>inputArray[j+1]){
				
				var temp=inputArray[j];
				inputArray[j]=inputArray[j+1];
				inputArray[j+1]=temp;
			}

		}
	}

console.log("Output: " +inputArray);

}

bubble_sort([1, 3, 4, 54, 12, 34, 6, 7, 10, 11]);