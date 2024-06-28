window.onload = function getProjectDetails() {
  let myName = localStorage.getItem("my-name");
  document.getElementById("my-name").innerHTML = myName;
}