import { Search } from "./Search.js";
import { Weather } from "./Weather.js";

class ApiWeather {
  constructor(latitude, longitude) {
    this.lat = latitude;
    this.long = longitude;
    this.url = "";
    this.init();
  }

  init() {
    this.buildUrl();
    this.getWeatherData();
  }

  buildUrl() {
    const base = "https://api.open-meteo.com/v1/forecast";
    const requiredLatitude = "latitude=" + this.lat;
    const requiredLongitude = "&longitude=" + this.long;

    const params = [
      "temperature_2m",
      "is_day",
      "rain",
      "snowfall",
      "cloud_cover",
      "wind_speed_10m",
    ];
    const paramsStringList = params.join(",");

    this.url = `${base}?${requiredLatitude}&${requiredLongitude}&current=${paramsStringList}`;
  }

  getWeatherData() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        window.app.temperatureValue = data.current.temperature_2m;
        window.app.isDay = data.current.is_day;
        window.app.rain = data.current.rain;
        window.app.snow = data.current.snowfall;
        window.app.cloud = data.current.cloud_cover;
        window.app.windSpeed = data.current.wind_speed_10m;
        new Weather();
      })
      .catch((error) =>
        alert("Nous n'avons pas les données pour la ville renseignée")
      );
  }
}

export { ApiWeather };
