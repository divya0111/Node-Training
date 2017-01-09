var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=69644c66e93587713445dedbf2f79115';

request({
  url:url,
  json: true
}, function (error, response, body)
{
  if (error){
    console.console.log('Unable to fetch weather');
  } else {
    console.log('it\'s' + body.main.temp + 'in' + body.name + '!');
  }
});
