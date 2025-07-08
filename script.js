// Intro Section
document.getElementById("SAIKISHORE BELIGE").textContent = "SAIKISHORE BELIGE"; 

// About Section
document.getElementById("about-text").textContent =
  "Motivated IT graduate with a strong foundation in front-end and back-end technologies including HTML, CSS, JavaScript, and React. Eager to contribute to dynamic development teams and build scalable web applications that enhance user experiences.";

// Skills Section
const skills = [
  "HTML5", "CSS3", "JavaScript", "Python (basic)",
  "React.js (basics – components, props, useState)",
  "DOM Manipulation", "Responsive Design", "REST APIs", 
  "Web Security (basic)", "OOP (basic)",
  "Visual Studio Code", "Git & GitHub", "Chrome DevTools",
  "MySQL (basic CRUD operations)"
];

const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});


// Projects Section
const projects = [
  {
    title: "Healthcare Dashboard Web App",
    description: "Built with HTML, CSS, JavaScript, and Chart.js. Visualizes patient and treatment data using interactive charts.",
    link: "https://github.com/SAIKISHOREBELIGE/healthcare-dashboard"
  },
  {
    title: "Personal Portfolio Website",
    description: "Responsive portfolio using HTML, CSS, and JavaScript. Showcases projects and GitHub repositories.",
    link: "https://github.com/SAIKISHOREBELIGE/Personal-Portfolio-Website"
  },
  {
    title: "Cyberbullying Detection on Social Media",
    description: "Frontend with HTML/CSS/JS, back-end via Python REST API. Allows users to test cyberbullying detection models.",
    link: "#"
  },
  {
    title: "DDoS Mitigation in IoT Environments",
    description: "Built a deep learning framework for DDoS detection. Trained on 50K+ samples, improved detection by 15%.",
    link: "#"
  }
];

const projectContainer = document.getElementById("project-container");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">🔗 View on GitHub</a>
  `;
  projectContainer.appendChild(div);
});
