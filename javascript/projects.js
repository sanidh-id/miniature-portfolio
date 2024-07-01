function setProjectDetails() {
  const projectTitle1 = 'Employee Assessment Web App';
  const projectMain1 = `A prototype I created with a team for an internship at Nissan Digital 
                      based on an excel sheet of questions for each department. 
                      Users can enter once and answer questions about themselves & get a score.
                      Supervisors can verify it. An admin can manage all details.`;
  const projectTech1 = 'HTML, CSS, JavaScript, React, Express.js, MySQL';

  const projectTitle2 = 'Collevo: College Activity Points Management App';
  const projectMain2 = `A web & mobile application for teachers & students so 
                      students can easily upload certificates for college activities & 
                      teachers can easily verify and award points. 
                      An admin can upload all the details for teachers & students.`;
  const projectTech2 = 'Flutter, Firebase, Python';

  localStorage.setItem("project-title-1", projectTitle1);
  localStorage.setItem("project-main-1", projectMain1);
  localStorage.setItem("project-tech-1", projectTech1);

  localStorage.setItem("project-title-2", projectTitle2);
  localStorage.setItem("project-main-2", projectMain2);
  localStorage.setItem("project-tech-2", projectTech2);
}

function getProjectDetails() {
  const projectTitle1 = localStorage.getItem("project-title-1");
  const projectMain1 = localStorage.getItem("project-main-1");
  const projectTech1 = localStorage.getItem("project-tech-1");

  const projectTitle2 = localStorage.getItem("project-title-2");
  const projectMain2 = localStorage.getItem("project-main-2");
  const projectTech2 = localStorage.getItem("project-tech-2");

  document.getElementById("project-1-title").innerHTML = projectTitle1;
  document.getElementById("project-1-body").innerHTML = projectMain1;
  document.getElementById("project-1-tech").innerHTML = projectTech1;

  document.getElementById("project-2-title").innerHTML = projectTitle2;
  document.getElementById("project-2-body").innerHTML = projectMain2;
  document.getElementById("project-2-tech").innerHTML = projectTech2;
}

window.onload = function runOnProject() {
  const myName = localStorage.getItem("my-name");
  document.getElementById("my-name").innerHTML = myName;

  setProjectDetails();

  getProjectDetails();
};
