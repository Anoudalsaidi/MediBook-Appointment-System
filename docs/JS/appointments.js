const container = document.getElementById("appointmentsContainer");

// جلب البيانات من localStorage
const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

// إذا ما في حجوزات
if (appointments.length === 0) {
  container.innerHTML = `
    <div class="text-center">
      <h4>No Appointments Yet 😢</h4>
      <a href="doctors.html" class="btn btn-primary mt-3">Book Now</a>
    </div>
  `;
}

// عرض الحجوزات
appointments.forEach((app, index) => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
    <div class="card appointment-card p-4 h-100">
      <h5>👨‍⚕️ ${app.doctor}</h5>
      <p><strong>Day:</strong> ${app.day}</p>
      <p><strong>Date:</strong> ${app.date}</p>
      <p><strong>Time:</strong> ${app.time}</p>
      <p><strong>Patient:</strong> ${app.name}</p>
      <p><strong>Ref:</strong> ${app.ref}</p>

      <button class="btn btn-danger mt-3" onclick="deleteAppointment(${index})">
        ❌ Cancel Appointment
      </button>
    </div>
  `;

  container.appendChild(col);
});

// Delete Appointment
function deleteAppointment(index) {
  const confirmDelete = confirm("Are you sure you want to cancel this appointment?");
  
  if (!confirmDelete) return;

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.splice(index, 1);
  localStorage.setItem("appointments", JSON.stringify(appointments));

  setTimeout(() => {
    location.reload();
  }, 500);
}