function updateTime() {
  let HelsinkiCurrentTime = document.querySelector("#helsinki .time");
  let HelsinkiCurrentDate = document.querySelector("#helsinki .date");
  let timeInHelsinki = moment().tz("Europe/Helsinki");
  HelsinkiCurrentDate.innerHTML = timeInHelsinki.format("MMMM D, YYYY");
  HelsinkiCurrentTime.innerHTML =
    timeInHelsinki.format("h:mm:ss") +
    `<small> ${timeInHelsinki.format("A")}</small>`;

  let ParisCurrentTime = document.querySelector("#paris .time");
  let ParisCurrentDate = document.querySelector("#paris .date");
  let timeInParis = moment().tz("Europe/Paris");
  ParisCurrentDate.innerHTML = timeInParis.format("MMMM D, YYYY");
  ParisCurrentTime.innerHTML =
    timeInParis.format("h:mm:ss") +
    `<small> ${timeInParis.format("A")}</small>`;

  let SydneyCurrentTime = document.querySelector("#sydney .time");
  let SydneyCurrentDate = document.querySelector("#sydney .date");
  let timeInSydney = moment().tz("Australia/Sydney");
  SydneyCurrentDate.innerHTML = timeInSydney.format("MMMM D, YYYY");
  SydneyCurrentTime.innerHTML =
    timeInSydney.format("h:mm:ss") +
    `<small> ${timeInSydney.format("A")}</small>`;

  let TokyoCurrentTime = document.querySelector("#tokyo .time");
  let TokyoCurrentDate = document.querySelector("#tokyo .date");
  let timeInTokyo = moment().tz("Asia/Tokyo");
  TokyoCurrentDate.innerHTML = timeInTokyo.format("MMMM D, YYYY");
  TokyoCurrentTime.innerHTML =
    timeInTokyo.format("h:mm:ss") +
    `<small> ${timeInTokyo.format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let timeInSelectedCity = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let selectedCityElement = document.querySelector("#update");
  selectedCityElement.innerHTML = `
   <div class="city">
          <h2>${cityName}</h2>
          <div>
            <div class="date">${timeInSelectedCity.format("MMMM D, YYYY")}</div>
            <div class="time">${timeInSelectedCity.format(
              "h:mm"
            )} <small> ${timeInSelectedCity.format("A")}</small></div>
          </div>
        </div>
    <a href="/">Back</a>
  `;
}

let citySelector = document.querySelector("#locations");
citySelector.addEventListener("change", updateCity);
