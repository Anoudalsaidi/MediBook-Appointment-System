import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  doctors = [
    {
"id": 1,
"name": "Dr. Sara Al-Rashidi",
"specialty": "Cardiology",
"rating": 4.9,
"experience": 14,
"fee": 60,
"available": true,
"availableDays": [
"Sunday",
"Tuesday",
"Thursday"
]
},
    {
      "id": 2,
      "name": "Dr. Omar Khalil",
      "specialty": "General Medicine",
      "rating": 4.5,
      "experience": 8,
      "fee": 30,
      "available": true,
      "availableDays": [
        "Sunday",
        "Monday",
        "Wednesday",
        "Saturday"
      ]
    },
    {
      "id": 3,
      "name": "Dr. Layla Mansour",
      "specialty": "Dermatology",
      "rating": 4.7,
      "experience": 10,
      "fee": 50,
      "available": true,
      "availableDays": [
        "Monday",
        "Wednesday",
        "Friday"
      ]
    },
    {
      "id": 4,
      "name": "Dr. Khalid Al-Farsi",
      "specialty": "Pediatrics",
      "rating": 4.6,
      "experience": 12,
      "fee": 45,
      "available": false,
      "availableDays": []
    },
    {
      "id": 5,
      "name": "Dr. Nadia Hassan",
      "specialty": "Orthopedics",
      "rating": 4.8,
      "experience": 16,
      "fee": 70,
      "available": true,
      "availableDays": [
        "Tuesday",
        "Thursday"
      ]
    },
    {
      "id": 6,
      "name": "Dr. Yousef Al-Balushi",
      "specialty": "Dentistry",
      "rating": 4.4,
      "experience": 6,
      "fee": 40,
      "available": true,
      "availableDays": [
        "Sunday",
        "Monday",
        "Thursday",
        "Saturday"
      ]
    },
    {
      "id": 7,
      "name": "Dr. Amina Qasim",
      "specialty": "General Medicine",
      "rating": 4.3,
      "experience": 5,
      "fee": 30,
      "available": false,
      "availableDays": []
    },
    {
      "id": 8,
      "name": "Dr. Faris Al-Siyabi",
      "specialty": "Cardiology",
      "rating": 4.7,
      "experience": 11,
      "fee": 65,
      "available": true,
      "availableDays": [
        "Monday",
        "Wednesday",
        "Friday"
      ]
    }
  ];

  services = [
    { name: "General Medicine", icon: "🩺", description: "Checkups and diagnosis" },
    { name: "Cardiology", icon: "❤️", description: "Heart care services" },
    { name: "Dermatology", icon: "🧴", description: "Skin treatments" },
    {
      "name": "Pediatrics",
      "icon": "\ud83d\udc76",
      "description": "Specialized healthcare for infants, children, and teenagers."
    },
    {
      "name": "Orthopedics",
      "icon": "\ud83e\uddb4",
      "description": "Bone, joint, and muscle disorders diagnosis and treatment."
    },
    {
      "name": "Dentistry",
"icon": "\ud83e\uddb7",
"description": "Full dental care including cleaning, fillings, and orthodontics."
}
  ];

  getDoctors() {
    return this.doctors;
  }

  getServices() {
    return this.services;
  }
}