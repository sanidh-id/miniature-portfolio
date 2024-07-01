function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

function setMainDetails() {
  localStorage.setItem("my-name", "Sanidh Varghese");

  let aboutMe = `I am a junior software developer currently working at Polus Solutions
          in Trivandrum, Kerala. I pursued my higher education in B.Tech in
          Computer Science from Mar Baselios College in Trivandum. I also did my
          major schooling in 10th and 12th from St. Thomas Central School from
          Trivandrum.
          <br /><br /> 
          I have an interest in Web/Mobile Development & Cloud Computing after
          working on a few apps in React and Flutter for web and mobile
          respectively & did a few basic cloud websites, APIs & Lambda functions
          (Python) on AWS for an internship. The major languages I have used are
          C, Python, JavaScript, HTML/CSS & Dart.
          <br /><br />
          I like participating in hackathons & quizzes. I also like reading
          audiobooks.`;
  // console.log('aboutMe: ', aboutMe);
  localStorage.setItem("about-me", aboutMe);
}

function getMainDetails() {
  let user = localStorage.getItem("current-user");
  document.getElementById("current-user").innerHTML =
    "Hi " + capitalize(user) + "👋 !";

  let myName = localStorage.getItem("my-name");
  document.getElementById("my-name").innerHTML = myName;

  let aboutMe = localStorage.getItem("about-me");
  document.getElementById("about-content").innerHTML = aboutMe;
}

window.onload = function runOnMain() {
  setMainDetails();

  getMainDetails();
};
