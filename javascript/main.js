window.onload = function checkLogin() {
  // console.log(localStorage.getItem("status"));

  if (localStorage.getItem("status") === "true") {
    // alert("Success");
    // return true;
  } else {
    alert("Please login 🙏");
    location.href = "login.html";
  }

  let user = localStorage.getItem("current-user");
  document.getElementById("current-user").innerHTML =
    "Hi " + capitalize(user) + "!";
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}
