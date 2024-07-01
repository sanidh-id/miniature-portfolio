function submitForm() {
  // Retrieve input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please enter a valid name/email/message🙏");
    return;
  }

  // Construct message to display
  const alertMessage =
    "Name: " + name + "\n" + "Email: " + email + "\n" + "Message: " + message;

  // Display message in alert
  alert(alertMessage);

  document.getElementById("myForm").reset();
}

window.onload = function runOnContact() {
  const myName = localStorage.getItem("my-name");
  document.getElementById("my-name").innerHTML = myName;
};
