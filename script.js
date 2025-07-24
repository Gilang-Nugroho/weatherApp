const apiKey = "0be1ca11b4a1c2c513ce2ca6b33e80a2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".containerSearch input");
const searchBtn = document.querySelector(".containerSearch button");
const weatherIcons = document.querySelector(".weatherIcon");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcons.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcons.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcons.src = "images/rain.png";
    } else if (data.weather[0].main === "Snow") {
      weatherIcons.src = "images/snow.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcons.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcons.src = "images/mist.png";
    }
  } catch (error) {
    alert("Gagal mengambil data cuaca");
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather("Jakarta");
