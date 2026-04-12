import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { DoctorsService } from './services/doctors.service';
import { FormsModule } from '@angular/forms';
import { DoctorBookingComponent } from './doctor-booking/doctor-booking.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DoctorsListComponent,
    DoctorCardComponent,
    AppointmentFormComponent,
    DoctorBookingComponent,
    MyAppointmentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    AppRoutingModule
  ],
  providers: [DoctorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
