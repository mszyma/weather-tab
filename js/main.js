//Getting location
$.getJSON('https://ipinfo.io/json', function(data) {
    console.log(data);
    $("#cityName").html(data.city);
    var loc = data.loc.split(',');
    var coords = {
        latitude: loc[0],
        longitude: loc[1]
    };
    console.log(coords.latitude, coords.longitude);

    //Getting weather
    var params = [
        "https://api.openweathermap.org/data/2.5/weather?",
        coords.latitude,
        coords.longitude,
        "&APPID=2d34a8421468ffb44f89aeceaf08ac07",
        "&units=metric",
    ];

    var url = params[0] + "lat=" + params[1] + "&lon=" + params[2] + params[3] + params[4];
    console.log(url);

    // Displaying weather
    $(document).ready(function() {
        $('.celc').hide();
        $.getJSON(url, function(json) {
            console.log(json);
            var temp = json.main.temp; // Getting temperature
            $("#temp").html(temp.toFixed(1)); // Adding temperature

            var weatherResult = json.weather[0].main;
            switch (weatherResult) {
                case "Thunderstorm":
                    $("#weatherIconOpenWeather").html("<img src='img/thunder.png' class='img-responsive' alt='thunder'>");
                    break;
                case "Drizzle":
                    $("#weatherIconOpenWeather").html("<img src='img/lightrain.png' class='img-responsive' alt='lightrain'>");
                    break;
                case "Rain":
                    $("#weatherIconOpenWeather").html("<img src='img/rain.png' class='img-responsive' alt='rain'>");
                    break;
                case "Snow":
                    $("#weatherIconOpenWeather").html("<img src='img/snow.png' class='img-responsive' alt='snow'>");
                    break;
                case "Atmosphere":
                    $("#weatherIconOpenWeather").html("<img src='img/mist.png' class='img-responsive' alt='mist'>");
                    break;
                case "Clear":
                    $("#weatherIconOpenWeather").html("<img src='img/sun.png' class='img-responsive' alt='sun'>");
                    break;
                case "Clouds":
                    $("#weatherIconOpenWeather").html("<img src='img/cloudy.png' class='img-responsive' alt='cloudy'>");
                    break;
            }

            function fahrenheit(input) { //convert to Fahrenheit
                var conversion;
                conversion = (9.0 / 5.0) * (input + 32);
                return conversion;
            }
            console.log(fahrenheit(temp));

            $('.fahren').click(function() {
              $('#temp').html(fahrenheit(temp));
              $('.fahren').hide();
              $('.celc').show();
            });
            $('.celc').click(function() {
              $('#temp').html(temp);
              $('.celc').hide();
              $('.fahren').show();
            });
        });
    });


});
