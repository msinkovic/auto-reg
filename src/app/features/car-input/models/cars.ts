export interface Car {
  make: string;
  model: string;
  model_year: string;
}

export interface CarMake {
  Country: string;
  Mfr_CommonName: string;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: VehicleType[]
}

export interface VehicleType {
  IsPrimary: boolean;
  Name: string;
}

export interface CarMakeResponse {
  Count: number;
  Message: string;
  Results: CarMake[]
  SearchCriteria: string;
}

export interface CarModel {
  id: number;
  makeId: number;
  name: string;
}

export interface CarYears {
  years: number[];
}