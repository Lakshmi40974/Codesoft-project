// Initialize AOS
AOS.init({
  duration: 800,
  once: true
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
  }
  
  // Here you would typically send the form data to a server
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});

// Navbar active state
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
      }
  });
  
  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
          link.classList.add('active');
      }
  });
});

  


const projects = [
  {
      title: "Music Player",
      description: "A web-based music player with play, pause, and shuffle functionality.",
      image: "music.png",
      link: "https://your-music-player-link.com"
  },
  {
      title: "Timer App",
      description: "A simple Time mannager app to manage daily tasks.",
      image: "timer.png",
      address: "C:\Users\laksh\OneDrive\Desktop\codesoft\portfolio\music\countdowntimer\timer\index.html",
  },
  
];

function displayProjects() {
  const projectsContainer = document.getElementById("projects-container");

  projects.forEach(project => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project-card");

      projectElement.innerHTML = `
          <img src="${project.image}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
      `;

      projectsContainer.appendChild(projectElement);
  });
}

// Call the function to display projects
displayProjects();

