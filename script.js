const url = "https://api.open-meteo.com/v1/forecast?latitude=-5.43&longitude=105.26&current_weather=true&timezone=auto";

fetch(url)
  .then(res => res.json())
  .then(data => {

    const tempC = data.current_weather.temperature;
    const tempF = (tempC * 9/5) + 32;
    const code = data.current_weather.weathercode;

    document.getElementById("tempC").textContent = Math.round(tempC) + "°C";
    document.getElementById("tempF").textContent = Math.round(tempF) + "°F";

    let text = "it's cloudy today ☁️";
    let image = "assets/cloudy (1).png";

    if (code >= 61) {
      text = "it's rainy today 🌧️";
      image = "assets/rainy (1).png"; // pastikan file ini ada
    }

    document.getElementById("weatherText").textContent = text;
    document.getElementById("bgImage").src = image;

  })
  .catch(err => {
    console.log("Error:", err);
  });

  getWeather(); 

setInterval(() => {
  getWeather();
}, 60000);