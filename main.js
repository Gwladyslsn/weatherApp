//import { Pollution } from "./modules/Pollution.js";
import { Search } from "./modules/Search.js";
import { Weather } from "./modules/Weather.js";

/*Création d'un objet app dans la variable WINDOW qui nous permet d'enregistrer les info necessaires*/

window.app = {
  city: "",
  windSpeed: "",
  temperatureValue: "",
  is_day: false,
  rain: "",
  snowfall: "",
  cloud_cover: "",
};

new Search();
new Weather();
