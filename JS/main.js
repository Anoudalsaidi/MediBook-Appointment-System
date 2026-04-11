// Containers
const servicesContainer = document.getElementById('servicesContainer');
const doctorsContainer = document.getElementById('doctorsContainer');
const doctorsCountEl = document.getElementById('doctorsCount');
const specialtiesCountEl = document.getElementById('specialtiesCount');
const patientsCountEl = document.getElementById('patientsCount');

fetch('Data/data.json')
  .then(res => res.json())
  .then(data => {
    // ---------- Display Services ----------
    data.services.forEach(service => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';

      col.innerHTML = `
        <div class="card service-card text-center p-4 h-100">
          <div class="service-icon" style="font-size:2rem">${service.icon}</div>
          <h5 class="mt-3">${service.name}</h5>
          <p>${service.description}</p>
        </div>
      `;
      servicesContainer.appendChild(col);
    });

    // ---------- Display Doctors ----------
    data.doctors.forEach(doc => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';

      col.innerHTML = `
        <div class="card doctor-card text-center p-4 h-100">
          <h5 class="doctor-name">
            <img src="./Assets/doctor icon.png" class="doctor-icon">
            ${doc.name}
          </h5>
          <p class="text-muted mb-1">${doc.specialty}</p>
          <div class="rating mt-2">
            ⭐ <span>${doc.rating}</span>
          </div>
          <p class="experience mt-2">
            ${doc.experience} years experience
          </p>
        </div>
      `;
      doctorsContainer.appendChild(col);
    });

    // ---------- Clinic Stats ----------
    doctorsCountEl.textContent = data.doctors.length;
    specialtiesCountEl.textContent = data.services.length;
    patientsCountEl.textContent = 500; 
  })
  .catch(error => console.error('Error:', error));
