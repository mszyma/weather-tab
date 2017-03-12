
var url = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=2d34a8421468ffb44f89aeceaf08ac07";

$.getJSON('http://ipinfo.io/json', function(data){
  console.log(data);
});

/*
$(document).ready(function() {
  $.getJSON(url, function(json) {
  console.log(json);
  });
});
*/
