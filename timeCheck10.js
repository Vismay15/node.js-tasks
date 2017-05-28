var moment = require('moment');
var currentime= moment.utc().format('YYYY-MM-DD HH:mm:ss'); // current time in utc
console.log("Current time -  " + currentime);
var userDate = moment().format('YYYY-MM-DD HH:mm:ss');//current time in user timezone , taken as user input
console.log("Date given by user -   "+userDate);

var time1= moment(currentime, 'YYYY-MM-DD HH:mm:ss');//current GMT/UTC time
var time2=moment(userDate, 'YYYY-MM-DD HH:mm:ss');//taken as user time
var timedifference = moment.duration(time2.diff(time1));
timedifference = timedifference.asSeconds();

if (timedifference>0) {
	console.log("Error :future date is given as input");
	return;
};

console.log("timed ifference is " + Math.abs(timedifference) + "ms" );
