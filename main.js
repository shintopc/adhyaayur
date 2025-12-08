import './style.css'; // Vite handles CSS import
import { header, footer } from './src/components/layout.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inject Layout
    const app = document.querySelector('#app') || document.body;

    // Insert Header at the beginning
    const headerDiv = document.createElement('div');
    headerDiv.innerHTML = header;
    document.body.insertBefore(headerDiv.firstElementChild, document.body.firstChild);

    // Insert Footer at the end
    const footerDiv = document.createElement('div');
    footerDiv.innerHTML = footer;
    document.body.appendChild(footerDiv.firstElementChild);

    // Insert WhatsApp Widget
    const waDiv = document.createElement('div');
    import('./src/components/layout.js').then(module => {
        waDiv.innerHTML = module.whatsappWidget || '';
        if (waDiv.innerHTML) document.body.appendChild(waDiv.firstElementChild);
    });

    // Mobile Menu Toggle Logic
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');

    if (toggleBtn && mobileOverlay) {
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Header Scroll Effect
    const mainHeader = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // Booking Form Handler
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const treatment = document.getElementById('treatment').value;
            const date = document.getElementById('date').value;
            const message = document.getElementById('message').value;

            // Construct WhatsApp Message
            const waNumber = "919876543210"; // Hospital Number
            const text = `*New Appointment Request*%0A%0A*Name:* ${firstName} ${lastName}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Treatment:* ${treatment}%0A*Date:* ${date}%0A*Message:* ${message}`;

            // Open WhatsApp
            window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');

            // Show Success simulation
            alert("Thank you! You are being redirected to WhatsApp to confirm your booking.");
            bookingForm.reset();
        });
    }
});
