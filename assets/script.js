// Define global variables
var apiKey = "229caa85659aa556b32058c6d46fcd6d";
var units = "imperial";
var lang = "en";
var lat;
var lon;
var cityName = $("#search-input").val().trim();

var weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=${units}&lang=${lang}`;

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const day1 = document.getElementById("day-1");
const day2 = document.getElementById("day-2");
const day3 = document.getElementById("day-3");
const day4 = document.getElementById("day-4");
const day5 = document.getElementById("day-5");



// Add method to fetch and display weather data
function displayWeather() {
  searchBtn.addEventListener("click", () => {
    cityName = searchInput.value;
    const url = `${weatherApiUrl}&q=${cityName}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        for (var i = 0; i < 5; i++) {
          const day = document.getElementById(`day-${i + 1}`);
          const date = new Date(data.list[i].dt_txt);
          const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
          // const weatherIcon="https://openweathermap.org/img/w/" + response.weather[i].icon + ".png";
          // day.querySelector(".icon").innerHTML = `${weatherIcon}`;
          day.querySelector(".date").innerHTML = `Date: ${dateString}`;
          day.querySelector(".cityName").innerHTML = data.city.name;
          day.querySelector(".temp").innerHTML = `Temperature: ${data.list[i].main.temp}°F`;
          day.querySelector(".humidity").innerHTML = `Humidity: ${data.list[i].main.humidity}%`;
          day.querySelector(".wind").innerHTML = `Wind Speed: ${data.list[i].wind.speed} m/s`;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    
  });
}
displayWeather();