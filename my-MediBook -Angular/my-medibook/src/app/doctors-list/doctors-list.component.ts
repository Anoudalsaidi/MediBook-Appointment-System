import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html'
})
export class DoctorsListComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit() {
    this.doctors = this.doctorsService.getDoctors();
  }
}