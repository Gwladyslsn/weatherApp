import { ApiWeather } from "./ApiWeather.js";

class Search {
  constructor() {
    this.cityInput = document.querySelector(".city-input");
    this.searchButton = document.querySelector(".search-button");
    this.cities = [];
    this.init();
  }

  init() {
    this.getCities();
    this.watchUserInput();
  }

  watchUserInput() {
    if (this.cityInput) {
      this.searchButton.addEventListener("click", () => {
        this.getLatLong();
        document.querySelector(".user-input").textContent = this.cityData.city;
      });
    } else {
      alert("Veuillez renseigner une ville");
    }
  }

  getLatLong() {
    //recuperer les coordonnées lat/long en fonction de la ville
    this.cityName = this.cityInput.value;
    this.cityData = this.getCityData();
    if (this.cityData) {
      const lat = this.cityData.lat;
      const long = this.cityData.lng;
      new ApiWeather(lat, long);
    } else {
      alert("La ville renseignée n'existe pas");
    }
  }

  getCities() {
    //recuperer les données du fichier json
    fetch("./data/french-cities.json")
      .then((response) => response.json())
      .then((data) => {
        this.cities = data;
      });
  }

  getCityData() {
    const cityNameLower = this.cityName.toLowerCase();
    let cityData = {};
    for (let i = 0; i < this.cities.length; i++) {
      const cityNameInDataLower = this.cities[i].city.toLowerCase();
      if (cityNameInDataLower === cityNameLower) {
        cityData = this.cities[i];
        break;
      }
    }
    return cityData;
  }
}

export { Search };
