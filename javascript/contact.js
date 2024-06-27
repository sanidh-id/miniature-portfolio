window.onload = function checkLogin() {
    // console.log(localStorage.getItem("status"));
    if (localStorage.getItem("status") === "true") {
      // alert("Success");
      // return true;
    } else {
      alert("Please login 🙏");
      location.href = "login.html";
    }
  }