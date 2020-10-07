$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=85815ce2f4d68bcd25bbc445d9f822c6", function(data){
    console.log(data);
    var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    var temp = Math.floor(data.main.temp) + '°C';
    var feels_like = Math.floor(data.main.feels_like) + '°C';
    var weather = data.weather[0].main;
    var city = data.name;

    $('.city').append(city);
    $('.weather').append(weather);
    $('.icon').attr('src', icon);
    $('.temp').append(temp);
    $('.feels_like').append(feels_like);
});

