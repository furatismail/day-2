import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarForm } from '../../shared/car-form.interface';

@Injectable({
  providedIn: 'root'
})
export class ParkingCalculatorService {
  private httpClient = inject(HttpClient)

  calculate(payload: CarForm): Observable<any> {
    return this.httpClient.post<any>('https://5ed74760152c310016d84d62.mockapi.io/api/calculation', payload);
  }

}
