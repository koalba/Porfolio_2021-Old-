function checkLocation() {
  if (myLocation === window.location.origin) {
    document
      .querySelector(".aboutme_button")
      .addEventListener("click", openAboutMe, false);

    document
      .querySelector(".hero_button")
      .addEventListener("click", openContact, false);

    document.querySelectorAll(".myPorfolio_button").forEach(function (element) {
      element.addEventListener("click", checkProjectType, false);
    });

    document
      .querySelector(".shuffle_button")
      .addEventListener("click", shuffleProjects, false);

    document
      .querySelector(".hero_title")
      .addEventListener("click", openNewProjects, false);

    document
      .querySelector(".shuffle_title")
      .addEventListener("click", openNewProjects, false);
  } else if (myLocation === window.location.origin + "/aboutme/") {
    document.querySelectorAll(".myPorfolio_button").forEach(function (element) {
      element.addEventListener("click", checkProjectType, false);
    });

    document
      .querySelector(".aboutme_button")
      .addEventListener("click", openContact, false);

    document
      .querySelector(".aboutme_title")
      .addEventListener("click", openCareerPath, false);

    document.querySelectorAll(".career_icon").forEach(function (element) {
      element.addEventListener("click", openCareerLink, false);
    });
  } else if (myLocation === window.location.origin + "/contact/") {
  } else if (myLocation === window.location.origin + "/projects/") {
    document.querySelectorAll(".myPorfolio_button").forEach(function (element) {
      element.addEventListener("click", projectButtons, false);
    });
  }
}

checkLocation();

console.log(window.location.origin);

function openNewProjects() {
  location.href = "#";
  location.href = "#newProjects";
}

function openCareerPath() {
  location.href = "#";
  location.href = "#careerpath";
}

function openAboutMe() {
  location.href = window.location.origin + "/aboutme/";
}

function openContact() {
  location.href = window.location.origin + "/contact/";
}

function checkProjectType() {
  if (this.classList.contains("threeD-button")) {
    sessionStorage.setItem("whatProject", "threeD");
    openProjects();
  } else if (this.classList.contains("twoD-button")) {
    sessionStorage.setItem("whatProject", "twoD");
    openProjects();
  } else if (this.classList.contains("web-button")) {
    sessionStorage.setItem("whatProject", "web");
    openProjects();
  }
}

function openProjects() {
  location.href = window.location.origin + "/projects/";
}
