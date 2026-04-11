const contactAddress = document.getElementById('contactAddress');
const contactPhone = document.getElementById('contactPhone');
const contactEmail = document.getElementById('contactEmail');
const contactHours = document.getElementById('contactHours');

// Fetch Data from JSON
fetch('Data/data.json')
  .then(res => res.json())
  .then(data => {
    if (data.clinic_info) {
      contactAddress.textContent = `📍 Address: ${data.clinic_info.address}`;
      contactPhone.textContent = `📞 Phone: ${data.clinic_info.phone}`;
      contactEmail.textContent = `✉ Email: ${data.clinic_info.email}`;
      contactHours.textContent = `⏰ Hours: ${data.clinic_info.hours}`;
    }
  })
  .catch(err => console.error('Error loading contact info:', err));

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  contactForm.reset();
});