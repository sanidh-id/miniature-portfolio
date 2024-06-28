function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

window.onload = function setDetails() {
  localStorage.setItem("my-name", "Sanidh Varghese");
}

window.onload = function getMainDetails() {
  let user = localStorage.getItem("current-user");
  document.getElementById("current-user").innerHTML =
    "Hi " + capitalize(user) + "👋 !";

  let myName = localStorage.getItem("my-name");
  document.getElementById("my-name").innerHTML = myName;
};
