class Weather {
  constructor() {
    this.logoWeather = document.querySelector(".weather-logo");
    this.logoWeather = [];
    const temperatureScale = [
      {
        scale: [-20, -10],
        quality: "glacial",
        src: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f976/lottie.json",
      },
      {
        scale: [-9, 0],
        quality: "tres froid",
        src: "tres froid",
      },
      {
        scale: [1, 10],
        quality: "frais",
        src: "frais",
      },
      {
        scale: [11, 20],
        quality: "doux",
        src: "doux",
      },
      {
        scale: [21, 25],
        quality: "agreable",
        src: "agreable",
      },
      {
        scale: [26, 30],
        quality: "chaud",
        src: "chaud",
      },
      {
        scale: [31, 35],
        quality: "tres chaud",
        src: "tres chaud",
      },
      {
        scale: [36, 40],
        quality: "caniculaire",
        src: "caniculaire",
      },
    ];

    this.temperature = document.querySelector(".temperature-info");

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
