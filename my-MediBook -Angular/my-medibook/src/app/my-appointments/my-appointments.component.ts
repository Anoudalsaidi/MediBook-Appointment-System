import { Component, OnInit } from '@angular/core';

interface Appointment {
  doctor: string;
  specialty: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    const data = localStorage.getItem('appointments');
    this.appointments = data ? JSON.parse(data) : [];
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}