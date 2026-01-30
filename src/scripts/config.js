// Global Configuration for JF Visa Consultancy
const CONFIG = {
    brandName: "JF Visa Consultancy",
    tagline: "JF Visa Consultancy, where dreams become a reality!",
    phone: "+92 306 5870215",
    whatsapp: "+923065870215", // Digital format
    email: "jfvisaconsultancy@gmail.com",
    address: "Office T-6, 3rd Floor, Rizwan Arcade Plaza, Near KFC, Adam Jee Road, Saddar, Rawalpindi, Pakistan",
    socials: {
        facebook: "https://www.facebook.com/jfvisaconsultancy/",
        instagram: "#" // Update when available
    },
    leadership: {
        ceo: "Syed Jawad Haider",
        md: "Syed Farrukh Ali"
    }
};

// Function to update global elements
function updateGlobalElements() {
    // Update Phone Numbers
    document.querySelectorAll('.contact-phone').forEach(el => {
        el.innerHTML = `<i class="fa-solid fa-phone text-accent"></i> ${CONFIG.phone}`;
        el.href = `tel:${CONFIG.phone.replace(/\s/g, '')}`;
    });

    // Update WhatsApp Links
    document.querySelectorAll('.whatsapp-link').forEach(el => {
        el.href = `https://wa.me/${CONFIG.whatsapp}`;
    });

    // Update Email
    document.querySelectorAll('.contact-email').forEach(el => {
        el.innerHTML = `<i class="fa-solid fa-envelope text-accent"></i> ${CONFIG.email}`;
        el.href = `mailto:${CONFIG.email}`;
    });

    // Update Address
    document.querySelectorAll('.contact-address').forEach(el => {
        el.innerHTML = `<i class="fa-solid fa-location-dot text-accent"></i> ${CONFIG.address}`;
    });

    // Update Brand Name in Copyright
    const year = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML = `&copy; ${year} ${CONFIG.brandName}. All Rights Reserved.`;
}

document.addEventListener('DOMContentLoaded', updateGlobalElements);
