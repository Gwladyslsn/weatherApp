class Weather {
  constructor() {
    this.logoFeeling = document.querySelector(".feeling-logo");
    this.logoFeeling.hidden = true;
    this.temperatureScale = [
      {
        scale: [-20, -10],
        quality: "snowman",
        src: "./ressources/feelingWeather/snowman.svg",
      },
      {
        scale: [-9, 1],
        quality: "cold",
        src: "./ressources/feelingWeather/cold.svg",
      },
      {
        scale: [1, 10],
        quality: "fresh",
        src: "./ressources/feelingWeather/fresh.svg",
      },
      {
        scale: [10, 20],
        quality: "sweet",
        src: "../ressources/feelingWeather/sweet.svg",
      },
      {
        scale: [21, 25],
        quality: "pleasant",
        src: "./ressources/feelingWeather/pleasant.svg",
      },
      {
        scale: [26, 34],
        quality: "hot",
        src: "./ressources/feelingWeather/hot.svg",
      },
      {
        scale: [35, 40],
        quality: "canicule",
        src: "./ressources/feelingWeather/canicule.svg",
      },
    ];

    this.temperature = document.querySelector(".temperature-info");
    this.climaticIcon = document.querySelector(".weather-logo");

    this.init();
  }

  init() {
    this.showInfo();
    this.showFeeling();
    this.climaticCondition();
  }

  showInfo() {
    // Remplacer les ... par les données récupérées
    this.temperature.textContent = `${window.app.temperatureValue} °C`;
  }

  showFeeling() {
    if (window.app.temperatureValue) {
      const feeling = this.temperatureScale.find(
        (item) =>
          item.scale[0] <= window.app.temperatureValue &&
          window.app.temperatureValue <= item.scale[1]
      );
      if (feeling) {
        this.logoFeeling.hidden = false;
        this.logoFeeling.src = feeling.src;
        this.logoFeeling.textContent = this.logoFeeling.src;
      } else {
        this.logoFeeling.hidden = true;
        alert("veuillez faire une nouvelle recherche");
      }
    }
  }

  climaticCondition() {
    //afficher l'emoticone correspondant à la méteo
    if (!window.app.temperatureValue) {
      this.climaticIcon.src = "./ressources/feelingAQI/magnifying-glass.svg";
    } else if (window.app.is_day === 0) {
      this.climaticIcon.src = "../ressources/weather/moon.png";
    } else if (window.app.rain === 1) {
      this.climaticIcon.src = "../ressources/weather/rain.png";
    } else if (window.app.snow === 1) {
      this.climaticIcon.src = "../ressources/weather/snow.png";
    } else if (window.app.windSpeed >= 15) {
      this.climaticIcon.src = "../ressources/weather/wind.png";
    } else if (window.app.cloud >= 100) {
      this.climaticIcon.src = "../ressources/weather/cloudy.png";
    } else {
      this.climaticIcon.src = "../ressources/weather/sun.png";
    }
    this.climaticIcon.textContent = this.climaticIcon.src;
  }
}

export { Weather };
