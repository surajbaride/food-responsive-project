
        // Smooth scrolling on button click
        document.querySelector('.explore-btn').addEventListener('click', function (e) {
            e.preventDefault(); 
            const targetSection = document.getElementById('section2');
            targetSection.scrollIntoView({ behavior: 'smooth' }); 
        });

        // Scroll-based image rotation
        window.addEventListener('scroll', function () {
            const scrollImages = document.querySelectorAll('.scroll-image');
            const scrollPosition = window.scrollY; 

            scrollImages.forEach((image) => {
                const rotateDegree = scrollPosition * 0.1; 
                image.style.transform = `rotate(${rotateDegree}deg)`; 
            });
        });

        // Intersection Observer for text content animations
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                }
            });
        }, { threshold: 0.5 });

        // Observe each section's text content
        document.querySelectorAll('section .text-content').forEach(text => {
            observer.observe(text);
        });
    