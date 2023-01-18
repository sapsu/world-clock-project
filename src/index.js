function updateTime() {
  let HelsinkiCurrentTime = document.querySelector("#helsinki .time");
  let HelsinkiCurrentDate = document.querySelector("#helsinki .date");
  HelsinkiCurrentTime.innerHTML = moment()
    .tz("Europe/Helsinki")
    .format("h:mm:ss A");
  HelsinkiCurrentDate.innerHTML = moment()
    .tz("Europe/Helsinki")
    .format("MMMM D, YYYY");
}
updateTime();
setInterval(updateTime, 1000);
