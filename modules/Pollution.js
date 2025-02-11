//class Pollution {
//  constructor() {
//    const pollutionScale = [
//      {
//        scale: [0, 50],
//        quality: "Good",
//        src: "happy",
//      },
//      {
//        scale: [51, 100],
//        quality: "Moderate",
//        src: "thinking",
//      },
//      {
//        scale: [101, 150],
//        quality: "unhealthy",
//        src: "unhealthy",
//      },
//      {
//        scale: [151, 200],
//        quality: "Bad",
//        src: "bad",
//      },
//      {
//        scale: [201, 300],
//        quality: "Very bad",
//        src: "mask",
//      },
//      {
//        scale: [301, 500],
//        quality: "Terrible",
//        src: "terrible",
//      },
//    ];
//
//    const loader = document.querySelector(".loader");
//    const emojiLogo = document.querySelector(".emoji-logo");
//    const cityInfo = document.querySelector(".city-input");
//
//    this.init();
//  }
//  init() {
//    getPollutionData();
//  }
//}
//
//async function getPollutionData() {
//  try {
//    const response = await fetch(
//      "https://api.waqi.info/v2/map/bounds?latlng=39.379436,116.091230,40.235643,116.784382&networks=all&token=demo"
//    );
//    console.log("fetch : ", response);
//  } catch {
//    console.log("attention error");
//  }
//}
//
//export { Pollution };
//
