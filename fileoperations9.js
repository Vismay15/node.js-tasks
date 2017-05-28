var fs = require("fs");
var buf = new Buffer(1024);
var fileonecontent;
//opening an existing file
fs.open('a.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("File opened successfully!");    

  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log("Content of the file read successfully");
      
      // Print only read bytes to avoid junk.
      if(bytes > 0){
      	fileonecontent=buf.slice(0, bytes).toString();
         console.log(fileonecontent);
      }


      fs.writeFile('b.txt',fileonecontent,function(err)
  {
  	if (err) {
  		console.log(err);
  	}console.log("content copied in a different file");


  });

   });

  

});

