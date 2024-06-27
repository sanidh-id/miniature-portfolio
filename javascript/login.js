window.onload = function setData() {
  // window.localStorage.setItem("name", "sanidh");
  // window.localStorage.setItem("password", "1234");
  // console.log(window.localStorage.getItem("name"));

  var users = [
    ["abin", "5678"],
    ["sanidh", "1234"],
  ];
  // console.log(users[0]);
  localStorage.setItem("users", JSON.stringify(users));
};

function check(form) {
  let flag = "false";

  const userData = JSON.parse(localStorage.getItem("users"));
  // console.log(userData);

  if (form.user.value === "" || form.password.value === "") {
    alert("Please enter a valid username/password 🙏");
    return;
  }
  for (let i = 0; i < userData.length; i++) {
    // console.log(userData[i]);
    if (
      form.user.value == userData[i][0] &&
      form.password.value == userData[i][1]
    ) {
      flag = "true";
      alert("Correct 👍");
      localStorage.setItem("current-user", userData[i][0]);
      localStorage.setItem("status", flag);
      location.href = "main.html";
      // return true;
    }
  }
  if (flag === false) {
    alert("Incorrect 👎, try again");
    // return false;
  }
}
