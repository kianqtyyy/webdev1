fetch("data.json")
.then(response => response.json())
.then(data => {


    const skillsContainer = document.getElementById("skills-container");

    data.skills.forEach(skill => {

        skillsContainer.innerHTML += `
            <div class="skill-card">
                <h3>${skill.name}</h3>
                <p>${skill.specification}</p>
            </div>
        `;

    });

    
    const projectsContainer = document.getElementById("projects-container");

    data.projects.forEach(project => {

        projectsContainer.innerHTML += `
            <article class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </article>
        `;

    });




});