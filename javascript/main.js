
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

let user = localStorage.getItem("current-user");
document.getElementById("current-user").innerHTML =
  "Hi " + capitalize(user) + "!";
