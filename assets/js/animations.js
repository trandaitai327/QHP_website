/**
 * Scroll Animations - Quang Hiền Phát
 * Handles scroll-triggered animations for better user experience
 */

(function() {
  'use strict';

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // Unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Initialize scroll animations
  function initScrollAnimations() {
    // Find all elements with animate-on-scroll classes that haven't been animated yet
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll:not(.animated), .animate-fade-up:not(.animated), .animate-fade-down:not(.animated), .animate-fade-left:not(.animated), .animate-fade-right:not(.animated), .animate-zoom:not(.animated)'
    );

    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Expose function globally for re-initialization
  window.initScrollAnimations = initScrollAnimations;

  // Parallax effect for hero sections
  function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-slow');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(el => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // Smooth reveal for text elements
  function initTextReveal() {
    const textElements = document.querySelectorAll('.text-reveal');
    
    textElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });
  }

  // Stagger animation for lists
  function initStaggerAnimation() {
    const staggerContainers = document.querySelectorAll('.stagger-container');
    
    staggerContainers.forEach(container => {
      const items = container.querySelectorAll('.stagger-item');
      items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
      });
    });
  }

  // Add hover effects to cards
  function initCardAnimations() {
    const cards = document.querySelectorAll('.card, [class*="card"]');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  // Counter animation for numbers
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start);
      }
    }, 16);
  }

  // Initialize all animations when DOM is ready
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    initScrollAnimations();
    initParallax();
    initTextReveal();
    initStaggerAnimation();
    initCardAnimations();

    // Animate counters if they exist
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-counter'));
      if (target) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateCounter(entry.target, target);
              observer.unobserve(entry.target);
            }
          });
        });
        observer.observe(counter);
      }
    });
  }

  // Start initialization
  init();

  // Re-initialize on dynamic content load
  if (typeof window !== 'undefined') {
    window.addEventListener('load', init);
  }
})();
