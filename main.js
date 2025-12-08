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

    // Insert WhatsApp Widget & PWA Button
    import('./src/components/layout.js').then(module => {
        const div = document.createElement('div');
        div.innerHTML = module.whatsappWidget || '';
        // Append all elements from the template
        while (div.firstChild) {
            document.body.appendChild(div.firstChild);
        }
    });

    // Mobile Menu Toggle Logic
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');

    if (toggleBtn && mobileOverlay) {
        // Toggle Menu
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent immediate closing
            toggleBtn.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close on clicking backdrop
        mobileOverlay.addEventListener('click', (e) => {
            if (e.target === mobileOverlay) {
                toggleBtn.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });

        // Close on link click
        const navLinks = mobileOverlay.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleBtn.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
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
            const waNumber = "919633237765"; // Hospital Number
            const text = `*New Appointment Request*%0A%0A*Name:* ${firstName} ${lastName}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Treatment:* ${treatment}%0A*Date:* ${date}%0A*Message:* ${message}`;

            // Open WhatsApp
            window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');

            // Show Success simulation
            alert("Thank you! You are being redirected to WhatsApp to confirm your booking.");
            bookingForm.reset();
        });
    }
});

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch((err) => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// PWA Install Prompt Logic
let deferredPrompt;
// Note: installBtn might reference the element before it's injected if not careful.
// Since injection is async (import().then), we need to use event delegation or wait.
// BUT, window.addEventListener('beforeinstallprompt') happens whenever.
// Let's use delegation for the click.

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('beforeinstallprompt fired');
});

// Since the button is injected dynamically, we should attach listener to body or wait.
// But earlier code attached it to `installBtn` which was selected at top level...
// Wait, `const installBtn = document.getElementById('pwa-install-btn');` checks DOM immediately.
// But the button is injected ASYNC via `import(..).then(...)`.
// So `installBtn` is likely NULL when this runs.
// That explains why it might fail to work despite being visible.

document.addEventListener('click', (e) => {
    if (e.target.closest('#pwa-install-btn')) {
        const btn = e.target.closest('#pwa-install-btn');
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                    btn.style.display = 'none';
                }
                deferredPrompt = null;
            });
        } else {
            alert("To install web app, tap 'Share' then 'Add to Home Screen' (iOS) or use your browser's Install option.");
        }
    }
});

// Hide if already installed (need to check periodically or after injection)
// Simple check:
setInterval(() => {
    const btn = document.getElementById('pwa-install-btn');
    if (btn && window.matchMedia('(display-mode: standalone)').matches) {
        btn.style.display = 'none';
    }
}, 1000);

window.addEventListener('appinstalled', () => {
    const btn = document.getElementById('pwa-install-btn');
    if (btn) btn.style.display = 'none';
    console.log('PWA was installed');
});
