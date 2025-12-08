export const header = `
<header class="main-header">
  <div class="container header-content">
    <div class="logo">
      <a href="/" class="logo-link">
        <img src="/logo.png" alt="Adhya Ayurveda Logo" class="logo-img">
        <div class="logo-text">
          <h1>Adhya Ayurveda</h1>
          <span class="tagline">Essence of Nature</span>
        </div>
      </a>
    </div>
    <nav class="desktop-nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about.html">About Us</a></li>
        <li><a href="/treatments.html">Treatments</a></li>
        <li><a href="/doctors.html">Doctors</a></li>
        <li><a href="/facilities.html">Facilities</a></li>
        <li><a href="/contact.html">Contact</a></li>
        <li><a href="/booking.html" class="btn btn-primary">Book Now</a></li>
      </ul>
    </nav>
    <button class="mobile-menu-toggle" aria-label="Toggle Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  <div class="mobile-nav-overlay">
    <nav class="mobile-nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about.html">About Us</a></li>
        <li><a href="/treatments.html">Treatments</a></li>
        <li><a href="/doctors.html">Doctors</a></li>
        <li><a href="/facilities.html">Facilities</a></li>
        <li><a href="/gallery.html">Gallery</a></li>
        <li><a href="/contact.html">Contact</a></li>
        <li><a href="/booking.html" class="btn btn-primary">Book Now</a></li>
      </ul>
    </nav>
  </div>
</header>
`;

export const footer = `
<footer class="main-footer">
  <div class="container footer-grid">
    <div class="footer-col">
      <h3>Adhya Ayurveda</h3>
      <p>Authentic Ayurveda Hospital dedicated to healing through nature's wisdom. Restoring balance, rejuvenating life.</p>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/about.html">About Us</a></li>
        <li><a href="/treatments.html">Treatments</a></li>
        <li><a href="/packages.html">Packages</a></li>
        <li><a href="/blog.html">Blog</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <p>📍 Virajpet, Karnataka, India</p>
      <p>📞 +91 96332 37765</p>
      <p>✉️ info@adhyaayurveda.com</p>
    </div>
  </div>
  <div class="footer-bottom text-center">
    <p>&copy; ${new Date().getFullYear()} Adhya Ayurveda Hospital. All rights reserved.</p>
  </div>
</footer >
`;

export const whatsappWidget = `
<a href="https://wa.me/919633237765" class="whatsapp-float" target="_blank" title="Chat with us">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="30" height="30">
</a>
`;
