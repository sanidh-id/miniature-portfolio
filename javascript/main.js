function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

window.onload = function setUser() {
  let user = localStorage.getItem("current-user");
  document.getElementById("current-user").innerHTML =
    "Hi " + capitalize(user) + "!";
};
