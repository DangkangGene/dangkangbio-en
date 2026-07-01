/**
 * Dangkang Bio - Main JavaScript
 * Professional Biotech Website
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initSmoothScroll();
});

/**
 * Navbar scroll effect
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when scrolled down
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!menuToggle || !navLinks) return;
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

/**
 * Scroll animations - fade in elements when they enter viewport
 */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if (fadeElements.length === 0) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Active navigation link based on current page
 */
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (currentPath.endsWith(href) || 
        (currentPath === '/' && href === 'index.html') ||
        (currentPath.endsWith('/') && href === 'index.html')) {
      link.classList.add('active');
    } else if (href !== 'index.html' && currentPath.includes(href.replace('.html', ''))) {
      link.classList.add('active');
    }
  });
}

// Call on page load
setActiveNavLink();

/**
 * Form validation (basic)
 */
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
  
  return isValid;
}

/**
 * Contact form submission handler
 */
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('#contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateForm(this)) {
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success';
        successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent. We will contact you soon.';
        
        this.innerHTML = '';
        this.appendChild(successMsg);
      }
    });
  }
});

/**
 * Counter animation for stats
 */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-value[data-count]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    // Use IntersectionObserver to trigger animation
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCounter();
        observer.unobserve(counter);
      }
    });
    
    observer.observe(counter);
  });
}

// Initialize counters if they exist
animateCounters();
