import { Route } from '@angular/router';
import { MainComponent } from "./features/main/main.component";
import { CarInputComponent } from "./features/car-input/car-input.component";

export const appRoutes: Route[] = [
  {
    path: '', component: MainComponent
  }, {
    path: 'dashboard', component: MainComponent
  }, {
    path: 'car-input', component: CarInputComponent
  }
];
