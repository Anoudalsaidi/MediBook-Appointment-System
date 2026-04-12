import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  filteredDoctors: Doctor[] = [];

  searchTerm: string = '';
  specialtyFilter: string = 'All';
  sortOption: string = 'Rating';

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.filterDoctors();
  }

  filterDoctors() {
    let filtered = this.doctorsService.getBySpecialty(this.specialtyFilter);

    // Search
    if (this.searchTerm) {
      filtered = filtered.filter(d =>
        d.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Sorting
    if (this.sortOption === 'Rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (this.sortOption === 'Experience') {
      filtered.sort((a, b) => b.experience - a.experience);
    }

    this.filteredDoctors = filtered;
  }
}