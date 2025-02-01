document.addEventListener('DOMContentLoaded', () => {
    // Initialize VANTA HALO effect with futuristic pastel cyberpunk settings
    VANTA.HALO({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      baseColor: 0xA3E4F3,          // Pastel blue
      backgroundColor: 0x0e0e0e,     // Dark backdrop
      size: 1.30,
      amplitude: 1.30
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Futuristic typewriter effect for the hero title
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
      const originalText = heroTitle.textContent;
      heroTitle.textContent = '';
      let index = 0;
      function typeWriter() {
        if (index < originalText.length) {
          heroTitle.textContent += originalText.charAt(index);
          index++;
          setTimeout(typeWriter, 80); // Adjust speed (ms) as desired
        }
      }
      typeWriter();
    }
    
    // Futuristic particle effect on button hover
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function(e) {
        // Create a particle element
        const particle = document.createElement('div');
        particle.classList.add('futuristic-particle');
        // Position the particle at the mouse location relative to the button
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        this.appendChild(particle);
        // Remove the particle after its animation completes
        setTimeout(() => {
          particle.remove();
        }, 800);
      });
    });
    
    // Fade-in effect for sections as they scroll into view using IntersectionObserver
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      section.classList.add('hidden');
      observer.observe(section);
    });
  });
  