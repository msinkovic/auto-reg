import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CarsService } from "./services/cars.service";
import { combineLatest, Observable, withLatestFrom } from "rxjs";

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
    washCtrl: [false],
    serviceCtrl: [false],
    checkCtrl: [false],
  });
  carMakes$: Observable<string[]>;
  carModels: string[] = [];
  carYears: string[] = [];

  secondStepValid = false;

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

    this.secondFormGroup.valueChanges.subscribe(value => {
      this.secondStepValid = !!value.checkCtrl || !!value.serviceCtrl || !!value.washCtrl;
    })

    // combineLatest([
    //   this.secondFormGroup.get('washCtrl')?.valueChanges as Observable<boolean>,
    //   this.secondFormGroup.get('serviceCtrl')?.valueChanges as Observable<boolean>,
    //   this.secondFormGroup.get('checkCtrl')?.valueChanges as Observable<boolean>
    // ]).subscribe(([wash, service, check]: [boolean, boolean, boolean]) => {
    //   console.log({wash, service, check})
    // })
  }


}
