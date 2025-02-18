class Weather {
  constructor() {
    this.logoFeeling = document.querySelector(".feeling-logo");
    this.logoFeeling.hidden = true;
    this.temperatureScale = [
      {
        scale: [-20, -10],
        quality: "snowman",
        src: "snowman",
      },
      {
        scale: [-9, 0],
        quality: "cold",
        src: "cold",
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
        src: "pleasant",
      },
      {
        scale: [26, 34],
        quality: "hot",
        src: "hot",
      },
      {
        scale: [35, 40],
        quality: "canicule",
        src: "canicule",
      },
    ];

    this.temperature = document.querySelector(".temperature-info");

    this.init();
  }

  init() {
    this.showIcon();
    this.showInfo();
    this.showFeeling();
  }

  showIcon() {
    //
  }

  showInfo() {
    // Remplacer les ... par les données récupérées
    this.temperature.textContent = `${window.app.temperatureValue} °C`;

    //remplacer les ... par les icones feeling
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
}

export { Weather };
