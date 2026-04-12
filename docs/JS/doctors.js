const doctorsContainer = document.getElementById('doctorsContainer');
const searchInput = document.getElementById('searchInput');
const filterSpecialty = document.getElementById('filterSpecialty');
const sortOption = document.getElementById('sortOption');

let doctors = [];

// Fetch Data
fetch('Data/data.json')
  .then(res => res.json())
  .then(data => {
    doctors = data.doctors.map(doc => ({
      ...doc,
      rating: doc.rating || Math.floor(Math.random() * 5) + 1,
      availableDays: doc.availableDays || ["Sun", "Mon", "Wed"]
    }));

    populateSpecialtyFilter(data.services);
    renderDoctors(doctors);
  });

// Fill Filter 
function populateSpecialtyFilter(services) {
  services.forEach(s => {
    const option = document.createElement('option');
    option.value = s.name;
    option.textContent = s.name;
    filterSpecialty.appendChild(option);
  });
}

// Display Doctors
function renderDoctors(list) {
  doctorsContainer.innerHTML = "";
  list.forEach((doc, index) => {
    const col = document.createElement('div');
    col.className = "col-md-4 mb-4";

    const initials = doc.name.split(" ").map(n => n[0]).join("").toUpperCase();
    const isFullBooked = doc.availableDays.length === 0;

    col.innerHTML = `
      <div class="card doctor-card h-100">
        <div class="doctor-photo">${initials}</div>
        <h5>${doc.name}</h5>
        <span class="badge-specialty">${doc.specialty}</span>
        <div class="rating mt-2">⭐ ${doc.rating}</div>
        <p class="experience mt-2">${doc.experience} years experience</p>
        <div class="available-days">Available: ${doc.availableDays.join(", ")}</div>
        
        ${
          isFullBooked
            ? `<span class="text-danger fw-bold mt-2 d-block">Full Booked</span>`
            : `
              <select id="daySelect-${index}" class="form-select mt-2">
                ${doc.availableDays.map(day => `<option value="${day}">${day}</option>`).join('')}
              </select>

              <button class="btn btn-primary mt-2" onclick="goToAppointment(${index})">
                Book Appointment
              </button>
            `
        }
      </div>
    `;
    doctorsContainer.appendChild(col);
  });
}

// NEW FUNCTION 
function goToAppointment(index) {
  const doc = doctors[index];
  const daySelect = document.getElementById(`daySelect-${index}`);
  const selectedDay = daySelect.value;

  // حفظ الدكتور + اليوم المختار
  const selectedDoctor = {
    ...doc,
    selectedDay: selectedDay
  };

  localStorage.setItem("selectedDoctor", JSON.stringify(selectedDoctor));

  // الانتقال لصفحة الحجز
  window.location.href = "appointment.html";
}


// ========================
// Search
// ========================
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = doctors.filter(d => 
    d.name.toLowerCase().includes(value) || 
    d.specialty.toLowerCase().includes(value)
  );
  renderDoctors(filtered);
});

// ========================
// Filter
// ========================
filterSpecialty.addEventListener("change", e => {
  const value = e.target.value;
  let filtered = doctors;
  if (value !== "All") filtered = doctors.filter(d => d.specialty === value);
  renderDoctors(filtered);
});

// ========================
// Sort
// ========================
sortOption.addEventListener("change", e => {
  const value = e.target.value;
  let sorted = [...doctors];
  if (value === "rating") sorted.sort((a,b) => b.rating - a.rating);
  if (value === "experience") sorted.sort((a,b) => b.experience - a.experience);
  renderDoctors(sorted);
});