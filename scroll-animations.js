// ===================================
// SCROLL-BASED ANIMATIONS
// Intersection Observer for Reveal Effects
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll-based reveals
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add reveal class to sections and observe them
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index > 0) { // Skip hero section
            section.classList.add('reveal');
            observer.observe(section);
        }
    });

    // Parallax effect for hero background
    const heroSection = document.querySelector('section.relative.min-h-\\[90vh\\]');
    const heroImage = heroSection?.querySelector('.absolute.inset-0 img');
    
    if (heroImage && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            if (heroImage) {
                heroImage.style.transform = `translateY(${rate}px)`;
            }
        }, { passive: true });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add hover tilt effect to cards
    const cards = document.querySelectorAll('.group.relative.overflow-hidden');
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Animated counter for stats
    const stats = document.querySelectorAll('.text-3xl.font-serif.font-bold');
    const animateCounter = (element) => {
        const text = element.textContent;
        const hasNumber = /\d+/.test(text);
        
        if (hasNumber) {
            const number = parseInt(text.match(/\d+/)[0]);
            const duration = 2000;
            const steps = 60;
            const increment = number / steps;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    element.textContent = text;
                    clearInterval(timer);
                } else {
                    element.textContent = text.replace(/\d+/, Math.floor(current));
                }
            }, duration / steps);
        }
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, a[class*="bg-"]');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
        }
        
        // Optional: Hide navbar on scroll down, show on scroll up
        // if (currentScroll > lastScroll && currentScroll > 200) {
        //     navbar.style.transform = 'translateY(-100%)';
        // } else {
        //     navbar.style.transform = 'translateY(0)';
        // }
        
        lastScroll = currentScroll;
    }, { passive: true });

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.transition = 'opacity 0.5s ease';
                this.style.opacity = '1';
            });
        }
    });

    // Magnetic effect for CTA buttons
    const ctaButtons = document.querySelectorAll('a[href*="buy.html"], a[href*="sell.html"], a[href*="contact.html"]');
    ctaButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });

    // Add stagger animation to list items
    const listItems = document.querySelectorAll('.grid > *');
    listItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Smooth reveal for testimonials
    const testimonials = document.querySelectorAll('.bg-gray-50.p-10');
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                testimonialObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    testimonials.forEach(testimonial => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateY(30px)';
        testimonial.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        testimonialObserver.observe(testimonial);
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        nav {
            transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    console.log('🎨 Dynamic UI/UX effects loaded successfully!');
});
