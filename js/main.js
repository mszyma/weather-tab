$.getJSON('http://ipinfo.io/json', function(data) {
    console.log(data);
    $("#cityName").html(data.city);
    var loc = data.loc.split(',');
    var coords = {
        latitude: loc[0],
        longitude: loc[1]
    };
    console.log(coords.latitude, coords.longitude);


    var params = [
      "http://api.openweathermap.org/data/2.5/weather?",
      coords.latitude,
      coords.longitude,
      "&APPID=2d34a8421468ffb44f89aeceaf08ac07",
      "&units=metric",
    ];

    var url = params[0] + "lat=" + params[1] + "&lon="+params[2] + params[3] + params[4];
    console.log(url);



    $(document).ready(function() {
        $.getJSON(url, function(json) {
            console.log(json);
              var icon = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
              console.log(icon);
            $("#weatherIconOpenWeather").html("<img src='" + icon + " '</img>");
            $("#temp").html(json.main.temp);
        });
    });
});
