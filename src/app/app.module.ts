import { NgModule } from '@angular/core';
import { MainComponent } from './features/main/main.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, UpperCasePipe } from "@angular/common";
import { CarInputComponent } from './features/car-input/car-input.component';
import { RouterLink } from "@angular/router";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { CarsService } from "./features/car-input/services/cars.service";

@NgModule({
  imports: [
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    UpperCasePipe,
    RouterLink,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [CarsService],
  declarations: [MainComponent, CarInputComponent],
  exports: [MainComponent],
})
export class AppModule {}
