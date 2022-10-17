function dateTime(num) {
  return num >= 0 && num < 10 ? "0" + num : num + "";
}

window.onload = function () {
  let now = new Date();
  let strDateTime = [[dateTime(now.getDate()), dateTime(now.getMonth() + 1), now.getFullYear()].join("-"), [dateTime(now.getHours()), dateTime(now.getMinutes())].join(":"), now.getHours() >= 12 ? "WIB" : "WIB"].join(" ");
  document.getElementById("date").innerHTML = strDateTime;
};
