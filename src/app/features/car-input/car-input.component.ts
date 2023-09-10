import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CarsService } from "./services/cars.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-car-input',
  templateUrl: './car-input.component.html',
  styleUrls: ['./car-input.component.scss'],
})
export class CarInputComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required],
    thirdCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  carMakes$: Observable<string[]>;
  carModels: string[] = [];
  carYears: string[] = [];

  constructor(private _formBuilder: FormBuilder, private _carService: CarsService) {
    this.carMakes$ = this._carService.getCarMakes();
  }

  ngOnInit(): void {
    console.log('ON INIT');
    this.firstFormGroup?.get('firstCtrl')?.valueChanges
      .subscribe(selectedValue  => {
        console.log(selectedValue)
        this.carModels = this._carService.getCarModelsByMake(selectedValue as string);
      })
    this.firstFormGroup?.get('secondCtrl')?.valueChanges
      .subscribe(selectedValue  => {
        console.log(selectedValue)
        this.carYears = this._carService.getCarYearsByModel(selectedValue as string);
      })
  }


}
