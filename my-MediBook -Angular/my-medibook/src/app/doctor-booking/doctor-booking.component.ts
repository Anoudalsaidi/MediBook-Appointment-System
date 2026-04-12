import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from '../models/doctor';

interface Appointment {
  doctor: string;
  specialty: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-doctor-booking',
  templateUrl: './doctor-booking.component.html',
  styleUrls: ['./doctor-booking.component.css']
})
export class DoctorBookingComponent implements OnInit {
  doctor: Doctor | undefined;
  stars: number[] = [];
  selectedDay: string = '';
  selectedTime: string = '';
  availableTimes: string[] = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM'];

  constructor(
    private route: ActivatedRoute,
    private doctorsService: DoctorsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null) {
      const doctors = this.doctorsService.getBySpecialty('All'); 
      this.doctor = doctors.find(d => d.id === id);

      if (this.doctor) {
        this.stars = Array(Math.round(this.doctor.rating)).fill(0);
      }
    }
  }

 book(): void {
  if (this.doctor && this.selectedDay && this.selectedTime) {

    const appointment: Appointment = {
      doctor: this.doctor.name,
      specialty: this.doctor.specialty,
      date: this.selectedDay,
      time: this.selectedTime
    };

    // save data
    const appointmentsStr = localStorage.getItem('appointments');
    const appointments: Appointment[] = appointmentsStr ? JSON.parse(appointmentsStr) : [];

    appointments.push(appointment);

    localStorage.setItem('appointments', JSON.stringify(appointments));

    alert(`Appointment booked with ${this.doctor.name} on ${this.selectedDay} at ${this.selectedTime}`);

    // انتقال واحد فقط
    this.router.navigate(['/my-appointments']);

  } else {
    alert('Please select a day and time before booking.');
  }
}
}