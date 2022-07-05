import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMeasurement } from '../dto/measurement';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  measurement: IMeasurement | undefined;

  constructor(protected http: HttpClient) { 
  }

  public getListOfAuto(): Observable<string[]>{
    return this.http.get<any>(`${environment.server}/getAllCars`);
  }

  public getMeasurementByAuto(vehicleModel: string): Observable<IMeasurement[]>{
    return this.http.get<any>(`${environment.server}/getAllMeasurementsSingleCar/${vehicleModel}`);
  }
}
