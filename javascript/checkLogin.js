window.onload = function checkLogin() {
  // console.log('localStorage-status: ',localStorage.getItem("status"));
  if (localStorage.getItem("status") === "true") {
    // alert("Success");
    return;
  } else {
    alert("Please login 🙏");
    location.href = "login.html";
  }
}

