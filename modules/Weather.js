import { ApiWeather } from "./ApiWeather.js";
import { Search } from "./Search.js";

class Weather {
  constructor() {
    this.logoWeather = document.querySelector(".weather-logo");
    this.logoWeather = [
      { img: "sun", text: "soleil", img.src="../ressources/weather/sun.png"},
      { img: "cloud", text: "nuage", img.src="../ressources/weather/cloudy.png" },
      { img: "rain", text: "pluie" },
      { img: "snow", text: "neige" },
      { img: "moon", text: "lune" },
    ]

    this.init();
  }

  init() {
    this.showIcon();
    this.showInfo();
  }

  showIcon() {
    this.logoWeather.textContent = "test";
  }

  showInfo() {
    // Remplacer les ... par les données récupérées
  }
}

export { Weather };
