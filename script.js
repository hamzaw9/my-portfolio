document.addEventListener('DOMContentLoaded', () => {
  
  /***** Start: Mobile navbar *****/
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-mbl').classList.add('nav-mbl-active');
    document.querySelector('.nav-mbl').classList.remove('nav-mbl-inactive');
  });
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.nav-mbl').classList.remove('nav-mbl-active');
    document.querySelector('.nav-mbl').classList.add('nav-mbl-inactive');
  });
  document.querySelector('.menu1').addEventListener('click', () => {
    document.querySelector('.nav-mbl').classList.remove('nav-mbl-active');
    document.querySelector('.nav-mbl').classList.add('nav-mbl-inactive');
  });
  document.querySelector('.menu2').addEventListener('click', () => {
    document.querySelector('.nav-mbl').classList.remove('nav-mbl-active');
    document.querySelector('.nav-mbl').classList.add('nav-mbl-inactive');
  });
  document.querySelector('.menu3').addEventListener('click', () => {
    document.querySelector('.nav-mbl').classList.remove('nav-mbl-active');
    document.querySelector('.nav-mbl').classList.add('nav-mbl-inactive');
  });

  /***** End: Mobile navbar *****/
  
  /***** Start: Work Section *****/

  /*** Card ***/

  let projects = [];
  fetch("projects.json")
  .then(response => response.json())
  .then(projectsData => {
    projects = projectsData.projects;

    for (let i = 0; i < projects.length; i++) {
      let card = document.createElement("div");
      card.className = "card";
      let workSection = document.querySelector(".work-history");
      workSection.appendChild(card);

      let img = document.createElement("img");
      img.alt = "Project Image";
      card.appendChild(img);

      let cardInner = document.createElement("div");
      cardInner.className = "card-inner";
      card.appendChild(cardInner);

      let projectName = document.createElement("div");
      projectName.className = "project-name";
      let h2 = document.createElement("h2");
      let projectCloseBtn = document.createElement("i");
      projectCloseBtn.className = "fa-solid fa-xmark fa-xl project-close-btn";
      projectName.appendChild(h2);
      projectName.appendChild(projectCloseBtn);
      cardInner.appendChild(projectName);

      let roles = document.createElement("p");
      let strongText = document.createElement("strong");
      let icon1 = document.createElement("i");
      icon1.className = "fa-solid fa-circle fa-2xs";
      let icon2 = document.createElement("i");
      icon2.className = "fa-solid fa-circle fa-2xs";
      let role1 = document.createElement("span");
      let role2 = document.createElement("span");
      roles.appendChild(strongText);
      roles.appendChild(icon1);
      roles.appendChild(role1);
      roles.appendChild(icon2);
      roles.appendChild(role2);
      cardInner.appendChild(roles);

      let projectDescription = document.createElement("p");
      projectDescription.className = "project-description";
      cardInner.appendChild(projectDescription);

      let technologies = document.createElement("ul");
      let technology1 = document.createElement("li");
      let technology2 = document.createElement("li");
      let technology3 = document.createElement("li");
      technologies.appendChild(technology1);
      technologies.appendChild(technology2);
      technologies.appendChild(technology3);
      cardInner.appendChild(technologies);

      let projectDetailsBtn = document.createElement("div");
      projectDetailsBtn.className = "project-details-btn";
      let seeProject = document.createElement("button");
      seeProject.className = "see-project";
      seeProject.innerText = "See Project";
      let seeLive = document.createElement("button");
      seeLive.className = "see-live";
      seeLive.innerText = "See Live";
      let seeSource = document.createElement("button");
      seeSource.className = "see-source";
      seeSource.innerText = "See Source";
      projectDetailsBtn.appendChild(seeProject);
      projectDetailsBtn.appendChild(seeLive);
      projectDetailsBtn.appendChild(seeSource);
      cardInner.appendChild(projectDetailsBtn);

      card.id = projects[i].id;
      img.src = projects[i].image;
      h2.textContent = projects[i].name;
      strongText.textContent = projects[i].roles[0];
      role1.textContent = projects[i].roles[1];
      role2.textContent = projects[i].roles[2];
      projectDescription.innerText = projects[i].description;
      technology1.innerText = projects[i].technologies[0];
      technology2.innerText = projects[i].technologies[1];
      technology3.innerText = projects[i].technologies[2];
    }
  })
  .catch(error => {
    // Handle any errors that occur during the fetch request
    console.log("Error:", error);
  })
  
  ;

  
  /***** End: Work Section *****/

  
});
