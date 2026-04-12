const form = document.getElementById("appointmentForm");

// ===== Doctor Summary =====
const selectedDoctor = JSON.parse(localStorage.getItem("selectedDoctor"));

if (selectedDoctor) {
  document.getElementById("doctorName").textContent = selectedDoctor.name;
  document.getElementById("doctorSpecialty").textContent = selectedDoctor.specialty;

  // Display Selected Day
  document.getElementById("doctorDays").textContent =
    "" + selectedDoctor.selectedDay;

  document.getElementById("doctorFee").textContent =
    "Fee: $" + selectedDoctor.fee;
}

// ===== Validation + Submit =====
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const concern = document.getElementById("concern").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Reset errors
  document.querySelectorAll("small").forEach(e => e.textContent = "");

  // Name
  if (!name) {
    document.getElementById("nameError").textContent = "Required";
    isValid = false;
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid Email";
    isValid = false;
  }

  // Phone
  if (!phone) {
    document.getElementById("phoneError").textContent = "Required";
    isValid = false;
  }

  // Age
  if (age < 1 || age > 120) {
    document.getElementById("ageError").textContent = "Age must be 1-120";
    isValid = false;
  }

  // Gender
  if (!gender) {
    document.getElementById("genderError").textContent = "Required";
    isValid = false;
  }

  // Concern
  if (!concern) {
    document.getElementById("concernError").textContent = "Required";
    isValid = false;
  }

  // Date (must be tomorrow)
  const today = new Date();
  const selectedDate = new Date(date);
  today.setDate(today.getDate() + 1);

  if (selectedDate < today) {
    document.getElementById("dateError").textContent = "Choose a future date";
    isValid = false;
  }

  // Time
  if (!time) {
    document.getElementById("timeError").textContent = "Required";
    isValid = false;
  }

  if (!isValid) return;

  // ===== Generate Reference Number =====
  const ref = Math.floor(10000000 + Math.random() * 90000000);

  // ===== Save to LocalStorage =====
  const appointment = {
    ref,
    name,
    doctor: selectedDoctor.name,
    day: selectedDoctor.selectedDay, 
    date,
    time
  };

  let allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
  // confirm No repeat appointments 

const existing = allAppointments.find(a => 
  a.doctor === selectedDoctor.name && a.date === date && a.time === time
);

if (existing) {
  alert("This slot is already booked! Please choose another day/time.");
  return; // stop appointments
}
  allAppointments.push(appointment);
  localStorage.setItem("appointments", JSON.stringify(allAppointments));

// ===== Confirmation Card =====
document.getElementById("confirmation").innerHTML = `
  <div class="card p-3 mt-4 shadow border-success">
    <h5 class="text-success">✅ Booking Confirmed</h5>
    <p><strong>Reference:</strong> ${ref}</p>
    <p><strong>Doctor:</strong> ${selectedDoctor.name}</p>
    <p><strong>Day:</strong> ${selectedDoctor.selectedDay}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>patient's Name:</strong> ${name}</p>

    <div class="mt-1 d-flex gap-1">
      <a href="doctors.html" class="btn btn-info">
        Back to Doctors
      </a>

      <a href="appointments.html" class="btn btn-success">
  View My Appointments
</a>
    </div>
  </div>
`;

  
  form.reset();
});