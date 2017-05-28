var weather = require('weather-js');

let weatherResult = [];
let HighTemData = {low: 100, high:0};
let LowTemData = {low: 100, high:0};

weather.find({search: 'Ahmedabad, Gujarat', degreeType: 'C'}, function(err, result) {
  if(err){
    console.log(err);
  }
  console.log(JSON.stringify(result, null, 2));
  weatherResult = result;

  weatherResult[0].forecast.map(function(ObjectData){
    if(ObjectData.low <= LowTemData.low){
        LowTemData = ObjectData;
    }
    if(ObjectData.high >= HighTemData.high){
        HighTemData = ObjectData;
    }
  });
  console.log('Low Temperature Data',LowTemData);
  /*
   LowTemData Object mathi date access kava mate LowTemData.date kariss to data print thase
   console.log('Low Temperature Date: ',LowTemData.date);
  */
  console.log('High Temperature Data',HighTemData);
});