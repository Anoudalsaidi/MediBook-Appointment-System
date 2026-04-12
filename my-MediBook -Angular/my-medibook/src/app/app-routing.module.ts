import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { DoctorBookingComponent } from './doctor-booking/doctor-booking.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'doctors', component: DoctorsListComponent },
  { path: 'booking/:id', component: DoctorBookingComponent },
  { path: 'appointment/:id', component: AppointmentFormComponent },
  { path: 'my-appointments', component: MyAppointmentsComponent },
  { path: '**', redirectTo: '/doctors' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }