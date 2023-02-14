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
const inputListEl = document.getElementById("input-list");

const searchHistory = JSON.parse(localStorage.getItem("city")) || [];

// Add method to fetch and display weather data
function displayWeather() {
  searchBtn.addEventListener("click", () => {
    cityName = searchInput.value;

    const url = `${weatherApiUrl}&q=${cityName}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (var i = 0; i < 6; i++) {
          const expect = data.list[i * 8];
          const day = document.getElementById(`day-${i + 1}`);
          day
            .querySelector(".icon")
            .setAttribute(
              "src",
              `https://openweathermap.org/img/wn/${expect.weather[0].icon}@2x.png`
            );
          day.querySelector(".date").innerHTML = new Date(
            expect.dt * 1000
          ).toDateString();
          day.querySelector(".cityName").innerHTML = data.city.name;
          day.querySelector(
            ".temp"
          ).innerHTML = `Temperature = ${expect.main.temp}°F`;
          day.querySelector(
            ".humidity"
          ).innerHTML = `Humidity = ${expect.main.humidity}%`;
          day.querySelector(
            ".wind"
          ).innerHTML = `Wind = ${expect.wind.speed} mph`;
        }
      });
    // Get Local Storage to Display
    searchHistory.push(cityName);
    localStorage.setItem("city", JSON.stringify(searchHistory));
    for (let i = 0; i < searchHistory.length; i++) {
      const searchHistory = JSON.parse(localStorage.getItem("city")) || [];
      inputListEl.innerHTML = "";
      const city = searchHistory[i];
      const li = document.createElement("li");
      li.textContent = city;
      inputListEl.append(li);
    }
  });
}
displayWeather();

// function getLocalStorage() {
//   const searchHistory = JSON.parse(localStorage.getItem("city")) || [];
//   inputListEl.innerHTML = "";
//   for (let i = 0; i < searchHistory.length; i++) {
//     const city = searchHistory[i];
//     const li = document.createElement("li");
//     li.textContent = city;
//     inputListEl.append(li);
//   }
// }
// getLocalStorage();