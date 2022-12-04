const city = document.querySelector(".cityName_description");
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
const icon = document.querySelector('#icon');
const context = document.querySelector('.context');

var search_button = document.querySelector(".searchBtn");
var search_input = document.querySelector(".search-Input");

//We first take user input, that is the city entered by the user in the search bar.
const takeUserInput = function () {
    var city = search_input.value;
        if (city.trim() === "") {
        alert("Error: City name cannot be empty!")
    }
    getCityCurrentWeather(city);
}

//We pass this input(specified city) to the api to get the response/details about the weather back
const getCityCurrentWeather = function (city) {

    //the api_url looks for the specified city from the input to get its current weather info
    const api_url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=0790b100b46b5d060a33b52ec2b5d7e3&units=metric';

    fetch(api_url)
        .then(response => {
            if(!response.ok) {
                alert("Error: No weather available, check your input!");
            }
            const responseFromApi = response.json();
            return responseFromApi;
        })

        .then(responseFromApi => {
            displayCurrentWeatherResults(responseFromApi);
        })

        .catch(err => {
            console.log(err);
        });
        
}

//we pass the weather results from the api to the display function, to display the weather of the city.
const displayCurrentWeatherResults = function(responseFromApi) {
    city.innerHTML = "City: " + responseFromApi.name;
    country.innerHTML = "Country: " + responseFromApi.sys.country;
    condition.innerHTML = "Condition: " + responseFromApi.weather[0].main;
    temperature.innerHTML = "Temp: " + Math.round(responseFromApi.main.temp) + " °C";
    min_temperature.innerHTML = "Min Temp: " + responseFromApi.main.temp_min + " °C";
    max_temperature.innerHTML = "Max Temp: " + responseFromApi.main.temp_max + " °C";
    feel_real.innerHTML = "Feels like: " + responseFromApi.main.feels_like + " °C";
    context.innerText = "Description: " + responseFromApi.weather[0].description;
    humidity.innerText = "Humidity: " + responseFromApi.main.humidity + "%";
    pressure.innerHTML = "Pressure: " + responseFromApi.main.pressure + " P ";
    wind.innerHTML = "Wind speed: " + responseFromApi.wind.speed + " km/h";
    wind_degree.innerHTML = "Degree: " + responseFromApi.wind.deg + "°";
    icon.src = "http://openweathermap.org/img/wn/" + responseFromApi.weather[0].icon + ".png"

}



