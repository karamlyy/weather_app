function getWeather() {
    const location = document.querySelector(".cityName_description");
    const country = document.querySelector(".country_description");
    const condition = document.querySelector(".weather_condition");
    const temperature = document.querySelector(".city_temperature");
    const min_temperature = document.querySelector(".min_temperature");
    const max_temperature = document.querySelector(".max_temperature");
    const feel_real = document.querySelector(".real_feel");
    const description = document.querySelector(".city_weather_description");
    const humidity = document.querySelector(".humidity");
    const pressure = document.querySelector(".pressure");
    const wind = document.querySelector(".wind");
    const wind_degree = document.querySelector(".wind_degree");
    const current_location = document.querySelector(".current_location");
    const icon = document.querySelector('#icon');
    const context = document.querySelector('.context');

    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "f146799a557e8ab658304c1b30cc3cfd";
    location.innerHTML = "Locating...";
  
    navigator.geolocation.getCurrentPosition(success, error);
  
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=metric";
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          let temp = data.main.temp;
          let temp_min = data.main.temp_min;
          let temp_max = data.main.temp_max;
          let temp_feels = data.main.feels_like;
          let hmdty = data.main.humidity;
          let pres = data.main.pressure;
          let wind_speed = data.wind.speed;
          let wind_deg = data.wind.deg;
          let cond = data.weather[0].main;
          let desc = data.weather[0].description;
          
          
          

          current_location.innerHTML = "You are in " + data.name;
          temperature.innerHTML = "Temperature: " + temp + "° C";
          condition.innerHTML = "Condition: " + cond;
          min_temperature.innerHTML = "Min Temperature: " + temp_min + "° C";
          max_temperature.innerHTML = "Max Temperature: " + temp_max + "° C";
          feel_real.innerHTML = "Feels Temperature: " + temp_feels + "° C";
          location.innerHTML = "City: " + data.name +" (" + latitude + "°, " + longitude + "°)";
          country.innerHTML = "Country: " + data.sys.country;
          humidity.innerHTML = "Humidity: " + hmdty + " %";  
          pressure.innerHTML = "Pressure: " + pres + " P";
          wind.innerHTML = "Wind Speed: " + wind_speed + " km/h";
          wind_degree.innerHTML = "Wind Degree: " + wind_deg + " °";
          description.innerHTML = "Description: " + desc;
          icon.src = "http://openweathermap.org/img/wn/" + responseFromApi.weather[0].icon + ".png"
        });
    }
  
    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
  }
  
  getWeather();