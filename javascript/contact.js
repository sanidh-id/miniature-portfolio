
function submitForm() {
  // Retrieve input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Construct message to display
  var alertMessage = "Name: " + name + "\n";
  alertMessage += "Email: " + email + "\n";
  alertMessage += "Message: " + message;

  // Display message in alert
  alert(alertMessage);

  document.getElementById("myForm").reset();
}
