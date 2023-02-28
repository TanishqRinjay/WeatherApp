const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "04c903933cmsh9905cb6b97b7380p186bd5jsndcf352d6e121",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Wrong City");
      }
      cityName.innerText = city.charAt(0).toUpperCase() + city.slice(1);
      return response.json();
    })
    .then((response) => {
      feels_like.innerText = response.feels_like;
      humidity.innerText = response.humidity;
      humidity2.innerText = response.humidity;
      max_temp.innerText = response.max_temp;
      min_temp.innerText = response.min_temp;
      sunrise.innerText = response.sunrise;
      sunset.innerText = response.sunset;
      temp.innerText = response.temp;
      temp2.innerText = response.temp;
      wind_degrees.innerText = response.wind_degrees;
      wind_speed.innerText = response.wind_speed;
      wind_speed2.innerText = response.wind_speed;
    })
    .catch(() => {
      alert("Enter a Valid City");
    });
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("delhi");
const majorCity = document.getElementsByClassName("majorCity");
changeMajor1(majorCity[0].innerText, 3);
changeMajor2(majorCity[1].innerText, 4);
function changeMajor1(majorCities) {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
      majorCities,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      feelsLike3.innerText = response.feels_like;
      humidity3.innerText = response.humidity;
      maxTemp3.innerText = response.max_temp;
      minTemp3.innerText = response.min_temp;
      cloudPct3.innerText = response.cloud_pct;
      windSpeed3.innerText = response.wind_speed;
      temp3.innerText = response.temp;
    });
}
function changeMajor2(majorCities) {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
      majorCities,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      feelsLike4.innerText = response.feels_like;
      humidity4.innerText = response.humidity;
      maxTemp4.innerText = response.max_temp;
      minTemp4.innerText = response.min_temp;
      windSpeed4.innerText = response.wind_speed;
      cloudPct4.innerText = response.cloud_pct;
      temp4.innerText = response.temp;
    });
}
