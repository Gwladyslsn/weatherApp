class Weather {
  constructor() {
    this.logoWeather = document.querySelector(".weather-logo");
    this.logoWeather = [];

    this.temperature = document.querySelector(".temperature-info");
    this.uvIndex = document.querySelector(".uv-info");

    this.init();
  }

  init() {
    this.showIcon();
    this.showInfo();
  }

  showIcon() {
    //
  }

  showInfo() {
    // Remplacer les ... par les données récupérées
    this.temperature.textContent = `${window.app.temperatureValue} °C`;
  }
}

export { Weather };
