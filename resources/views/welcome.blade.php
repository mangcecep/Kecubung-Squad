<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>KecubungLMS - Online Learning Platform</title>

    @vite([
        'resources/css/landing_page.css',
        'resources/js/landing_page.js'
    ])
</head>
<body>

  <!-- Hero Section -->
  <section class="hero-section">
    <!-- Decorative Elements -->
    <img class="star-decoration star-bottom-left" src="https://c.animaapp.com/mik62bp9p4vbCv/img/star-4.svg" alt="">
    <img class="star-decoration star-top-left" src="https://c.animaapp.com/mik62bp9p4vbCv/img/star-5.svg" alt="">
    <div class="circle-decoration circle-outer"></div>
    <div class="circle-decoration circle-inner"></div>

    <div class="container">
      <!-- Navigation -->
     <nav class="navbar">
  <div class="nav-links">
    <a href="/" class="nav-item {{ request()->is('/') ? 'active' : '' }}">Home</a>

    <a href="{{ route('courses') }}" 
       class="nav-item {{ request()->is('courses') ? 'active' : '' }}">
      Courses
    </a>

    <a href="{{ route('dashboard') }}" 
       class="nav-item {{ request()->is('dashboard') ? 'active' : '' }}">
      Dashboard
    </a>
  </div>

        <div class="nav-buttons">
          <a href="{{ route('login') }}" class="btn btn-signin">Sign In</a>
          <a href="{{ route('register') }}" class="btn btn-register">Register</a>
        </div>
      </nav>

      <!-- Hero Content -->
      <div class="hero-content">
        <div class="badge">The Leader in Online Learning</div>
        
        <h1 class="hero-title">
          Find the Best <span class="highlight">Courses</span> from the Best <span class="highlight">Mentors</span> Around the World
        </h1>
        
        <p class="hero-description">
          Our specialized online courses are designed to bring the classroom experience to you, no matter where you are.
        </p>
      </div>
    </div>
  </section>

  <!-- Footer Section -->
  <footer class="footer">
    <div class="footer-main">
      <img class="footer-star footer-star-left" src="https://c.animaapp.com/mik62bp9p4vbCv/img/star-4-1.svg" alt="">
      <img class="footer-star footer-star-right" src="https://c.animaapp.com/mik62bp9p4vbCv/img/star-5-1.svg" alt="">
      
      <div class="container">
        <div class="footer-grid">
          
          <!-- Company Info -->
          <div class="footer-column">
            <div class="footer-logo"></div>
            <p class="footer-description">
              Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.
            </p>
          </div>

          <!-- For Instructor -->
          <div class="footer-column">
            <h5 class="footer-heading">For Instructor</h5>
            <ul class="footer-links">
              <li><a href="#search-mentors">Search Mentors</a></li>
              <li><a href="{{ route('login') }}">Login</a></li>
              <li><a href="{{ route('register') }}">Register</a></li>
              <li><a href="#booking">Booking</a></li>
              <li><a href="#students-dashboard">Students Dashboard</a></li>
            </ul>
          </div>

          <!-- For Student -->
          <div class="footer-column">
            <h5 class="footer-heading">For Student</h5>
            <ul class="footer-links">
              <li><a href="#appointments">Appointments</a></li>
              <li><a href="#chat">Chat</a></li>
              <li><a href="{{ route('login') }}">Login</a></li>
              <li><a href="{{ route('register') }}">Register</a></li>
              <li><a href="#instructor-dashboard">Instructor Dashboard</a></li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div class="footer-column">
            <h5 class="footer-heading">Newsletter</h5>
            <address class="footer-contact">
              <div class="contact-item">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m2 7 10 7 10-7"></path>
                </svg>
                <span>kecubungLMS@gmail.com</span>
              </div>
              <div class="contact-item">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+089989998999999899</span>
              </div>
            </address>
          </div>

        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p class="copyright">© 2025 kecubungLMS. All rights reserved.</p>
          <nav class="footer-nav">
            <a href="#terms">Terms & Conditions</a>
            <span class="divider">|</span>
            <a href="#privacy">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>

</body>
</html>
