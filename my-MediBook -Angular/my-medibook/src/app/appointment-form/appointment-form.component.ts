import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from '../services/doctors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {

  patientName: string = '';
  isFormValid: boolean = false;

  doctorName: string = '';
  specialty: string = '';

  selectedDate: string = '';
  selectedTime: string = '';

  minDate: string = '';

  appointment: any = null;

  constructor(
    private route: ActivatedRoute,
    private doctorsService: DoctorsService,
    private router: Router
  ) {}

  ngOnInit() {

    // date start from tomorrow
    const today = new Date();
    today.setDate(today.getDate() + 1);
    this.minDate = today.toISOString().split('T')[0];

    //choose doctor
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const doctor = this.doctorsService.getDoctorById(id);
    if (doctor) {
      this.doctorName = doctor.name;
      this.specialty = doctor.specialty;
    }
     // choose data from state
    const navigation = history.state;

    if (navigation && navigation.day && navigation.time) {
      this.appointment = {
        day: navigation.day,
        time: navigation.time
      };
    }
  }

  onNameChange() {
    this.isFormValid = this.patientName.trim().length > 0;
  }

  submit() {

    const data = localStorage.getItem('appointments');
    const appointments = data ? JSON.parse(data) : [];

    // No Repeat with same doctor
    const isTaken = appointments.some((a: any) =>
      a.doctor === this.doctorName &&
      a.date === this.selectedDate &&
      a.time === this.selectedTime
    );

    if (isTaken) {
      alert('This time slot is already booked for this doctor ❌');
      return;
    }

    const appointment = {
      doctor: this.doctorName,
      specialty: this.specialty,
      date: this.selectedDate,
      time: this.selectedTime,
      patientName: this.patientName
    };

    appointments.push(appointment);

    localStorage.setItem('appointments', JSON.stringify(appointments));

    this.router.navigate(['/my-appointments']);
  }
}