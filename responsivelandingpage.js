// scripts.js
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function() {
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    if (currentSection) {
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });

        switch (currentSection) {
            case 'home':
                navUl.style.backgroundColor = 'red';
                break;
            case 'about':
                navUl.style.backgroundColor = 'yellow';
                break;
            case 'services':
                navUl.style.backgroundColor = 'blue';
                break;
            case 'contact':
                navUl.style.backgroundColor = 'green';
                break;
            default:
                navUl.style.backgroundColor = '#333';
                break;
        }
    }

    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
