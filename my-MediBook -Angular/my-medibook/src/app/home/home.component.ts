import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  doctors: Doctor[] = [];
  services: any[] = [];

  doctorsCount = 0;
  patientsCount = 0;
  specialtiesCount = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    this.doctors = this.dataService.getDoctors();
    this.services = this.dataService.getServices();

    this.doctorsCount = this.doctors.length;

    this.specialtiesCount = new Set(
      this.doctors.map(d => d.specialty)
    ).size;

    this.patientsCount = this.doctors.length * 200;
  }
}