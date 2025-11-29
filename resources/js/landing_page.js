// Navigation interaction
document.addEventListener('DOMContentLoaded', function() {
  // Navigation items click handler
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      
      const page = this.getAttribute('data-page');
      console.log('Navigating to:', page);
      
    });
  });

  const signInBtn = document.querySelector('.btn-signin');
  if (signInBtn) {
    signInBtn.addEventListener('click', function() {
      console.log('Sign In clicked');
    });
  }

  const registerBtn = document.querySelector('.btn-register');
  if (registerBtn) {
    registerBtn.addEventListener('click', function() {
      console.log('Register clicked');
    });
  }
  const footerLinks = document.querySelectorAll('.footer-links a, .footer-nav a');
  
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      console.log('Footer link clicked:', href);
      
    });
  });


  // Optional: Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe footer sections for scroll animations
  const footerColumns = document.querySelectorAll('.footer-column');
  footerColumns.forEach(column => {
    observer.observe(column);
  });
});
