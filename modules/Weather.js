class Weather {
  constructor(latitude, longitude) {
    this.lat = latitude;
    this.long = longitude;
    this.url = "";

    this.init();
  }

  init() {
    this.buildUrl();
    this.getWindData();
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
    console.log(this.url);
  }

  getWindData() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        window.app.windDirection = data.current.wind_direction_10m;
        window.app.windSpeed = data.current.wind_speed_10m;
      });
  }
}

export { Weather };
