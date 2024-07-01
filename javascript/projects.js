function setProjectDetails() {
  let projectTitle1 = 'Employee Assessment Web App';
  let projectMain1 = `A prototype I created with a team for an internship at Nissan Digital 
                      based on an excel sheet of questions for each department. 
                      Users can enter once and answer questions about themselves & get a score.
                      Supervisors can verify it. An admin can manage all details.`;
  let projectTech1 = 'HTML, CSS, JavaScript, React, Express.js, MySQL';

  let projectTitle2 = 'Collevo: College Activity Points Management App';
  let projectMain2 = `A web & mobile application for teachers & students so 
                      students can easily upload certificates for college activities & 
                      teachers can easily verify and award points. 
                      An admin can upload all the details for teachers & students.`;
  let projectTech2 = 'Flutter, Firebase, Python';

  localStorage.setItem("project-title-1", projectTitle1);
  localStorage.setItem("project-main-1", projectMain1);
  localStorage.setItem("project-tech-1", projectTech1);

  localStorage.setItem("project-title-2", projectTitle2);
  localStorage.setItem("project-main-2", projectMain2);
  localStorage.setItem("project-tech-2", projectTech2);
}

function getProjectDetails() {
  let projectTitle1 = localStorage.getItem("project-title-1");
  let projectMain1 = localStorage.getItem("project-main-1");
  let projectTech1 = localStorage.getItem("project-tech-1");

  let projectTitle2 = localStorage.getItem("project-title-2");
  let projectMain2 = localStorage.getItem("project-main-2");
  let projectTech2 = localStorage.getItem("project-tech-2");

  document.getElementById("project-1-title").innerHTML = projectTitle1;
  document.getElementById("project-1-body").innerHTML = projectMain1;
  document.getElementById("project-1-tech").innerHTML = projectTech1;

  document.getElementById("project-2-title").innerHTML = projectTitle2;
  document.getElementById("project-2-body").innerHTML = projectMain2;
  document.getElementById("project-2-tech").innerHTML = projectTech2;
}

window.onload = function runOnProject() {
  let myName = localStorage.getItem("my-name");
  document.getElementById("my-name").innerHTML = myName;

  setProjectDetails();

  getProjectDetails();
};
