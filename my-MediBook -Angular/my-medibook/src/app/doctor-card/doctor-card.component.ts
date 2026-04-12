import { Component, Input } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent {

  @Input() doctor!: Doctor;

  selectedDay: string = '';

  constructor(private router: Router) {}

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }

  getStars(rating: number): number[] {
    const count = Math.round(rating);
    return Array(count).fill(0);
  }

  isAvailable(): boolean {
    return this.doctor.available && this.doctor.availableDays?.length > 0;
  }

  // choose date then go to appoinment
  bookAppointment(doctorId: number) {

    if (!this.selectedDay) {
      alert('Please select a day first ❗');
      return;
    }

    this.router.navigate(['/appointment', doctorId], {
      queryParams: {
        day: this.selectedDay
      }
    });
  }
}