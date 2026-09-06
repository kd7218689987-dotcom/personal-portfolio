// Active Link Highlighting on Scroll
const sections = document.querySelectorAll('.About-Section, .project-section, .contact-section, .hero-section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Create and Add Scroll-to-Top Button dynamically
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollTopBtn);

// Style the button
Object.assign(scrollTopBtn.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'none',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    border: 'none',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    fontSize: '22px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
    zIndex: '1000',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease'
});

// Show button only after scrolling down 300px
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'block';
    }
});

// Smooth scroll to top on click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});