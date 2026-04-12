import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Ahmed',
      specialty: 'Cardiology',
      rating: 5,
      experience: 10,
      available: true,
      fee: 50,
      availableDays: ['Sun', 'Mon']
    },
    {
      id: 2,
      name: 'Dr. Sara',
      specialty: 'Dermatology',
      rating: 4,
      experience: 7,
      available: false,
      fee: 40,
      availableDays: []
    }
  ];

  getDoctors() {
    return this.doctors;
  }

}