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
searchBtn.addEventListener("click", () => {
  cityName = searchInput.value;
  const url = `${weatherApiUrl}&q=${cityName}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      day1.querySelector(".cityName").innerHTML = data.city.name;
      day1.querySelector(
        ".temp"
      ).innerHTML = `Temperature: ${data.list[0].main.temp}°F`;
      day1.querySelector(
        ".humidity"
      ).innerHTML = `Humidity: ${data.list[0].main.humidity}%`;
      day1.querySelector(
        ".wind"
      ).innerHTML = `Wind Speed: ${data.list[0].wind.speed} m/s`;

      day2.querySelector(".cityName").innerHTML = data.city.name;
      day2.querySelector(
        ".temp"
      ).innerHTML = `Temperature: ${data.list[1].main.temp}°F`;
      day2.querySelector(
        ".humidity"
      ).innerHTML = `Humidity: ${data.list[1].main.humidity}%`;
      day2.querySelector(
        ".wind"
      ).innerHTML = `Wind Speed: ${data.list[1].wind.speed} m/s`;

      day3.querySelector(".cityName").innerHTML = data.city.name;
      day3.querySelector(
        ".temp"
      ).innerHTML = `Temperature: ${data.list[2].main.temp}°F`;
      day3.querySelector(
        ".humidity"
      ).innerHTML = `Humidity: ${data.list[2].main.humidity}%`;
      day3.querySelector(
        ".wind"
      ).innerHTML = `Wind Speed: ${data.list[2].wind.speed} m/s`;

      day4.querySelector(".cityName").innerHTML = data.city.name;
      day4.querySelector(
        ".temp"
      ).innerHTML = `Temperature: ${data.list[3].main.temp}°F`;
      day4.querySelector(
        ".humidity"
      ).innerHTML = `Humidity: ${data.list[3].main.humidity}%`;
      day4.querySelector(
        ".wind"
      ).innerHTML = `Wind Speed: ${data.list[3].wind.speed} m/s`;

      day5.querySelector(".cityName").innerHTML = data.city.name;
      day5.querySelector(
        ".temp"
      ).innerHTML = `Temperature: ${data.list[4].main.temp}°F`;
      day5.querySelector(
        ".humidity"
      ).innerHTML = `Humidity: ${data.list[4].main.humidity}%`;
      day5.querySelector(
        ".wind"
      ).innerHTML = `Wind Speed: ${data.list[4].wind.speed} m/s`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
