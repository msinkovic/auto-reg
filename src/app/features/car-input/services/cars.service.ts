import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, filter, map, Observable, take, tap } from "rxjs";
import { Car, CarMake, CarMakeResponse } from "../models/cars";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private _cars = new BehaviorSubject<Car[]>([]);
  private _carMakes = new BehaviorSubject<string[]>([]);

  constructor(private _httpClient: HttpClient) {
    console.log('CONSTRUCTOR');
    this._getCars();
  }

  private _getCars(): void {
    console.log('GETTING CARS');
    this._httpClient.get<Car[]>('assets/cars.json')
      .pipe(tap(res => this._cars.next(res)), map(res => this._setCarMakes(res)), take(1)).subscribe();
  }
  
  private _setCarMakes(cars: Car[]): void {
    console.log('SETTING CAR MAKES');
    const allMakes = cars.map(res => res.make);
    this._carMakes.next([...new Set(allMakes)].sort());
    console.log(this._carMakes.getValue());
  }

  public getCarMakes(): Observable<string[]> {
    return this._carMakes.asObservable();
  }

  public getCarModelsByMake(make: string): string[] {
    const allModels = this._cars.getValue().filter(car => car.make === make).map(car => car.model);
    return [...new Set(allModels)].sort();
  }

  public getCarYearsByModel(model: string): string[] {
    const allYears = this._cars.getValue().filter(car => car.model === model).map(car => car.model_year);
    return [...new Set(allYears)].sort();
  }
}
