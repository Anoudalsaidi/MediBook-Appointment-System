import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DoctorsListComponent,
    DoctorCardComponent,
    AppointmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
