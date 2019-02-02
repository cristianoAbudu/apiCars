import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { CarInterface } from '../models/car-interface';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {  
  constructor(private http: HttpClient, private authService: AuthService) { }
  cars: Observable<any>;
  car: Observable<any>;
  
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });
  
  getAllCars() {
	const url_api = `http://localhost:3000/api/cars`;
    return this.http.get(url_api);
  }
  
  //http://localhost:3000/api/cars/1
  getCarById(id: string) {
    const url_api = `http://localhost:3000/api/cars/${id}`;
    return (this.car = this.http.get(url_api));
  }    
  
  getOffers() {
    const url_api = `http://localhost:3000/api/cars?filter[where][ano][lt]=2000`;
    return (this.cars = this.http.get(url_api));
  }  
  
  getNoOffers() {
    const url_api = `http://localhost:3000/api/cars?filter[where][ano][gt]=1999`;
    return (this.cars = this.http.get(url_api));
  }
  
  saveCar(car : CarInterface){
    let token = this.authService.getToken();

	const url_api = `http://localhost:3000/api/cars?access_token=${token}`;
	return this.http.post<CarInterface>(url_api, car, { headers: this.headers })
	.pipe(map(data=>data));	
  }	  
  
  
  updateCar(car){
    let token = this.authService.getToken();

	const url_api = `http://localhost:3000/api/cars?access_token=${token}`;
	return this.http.put<CarInterface>(url_api, car,  { headers: this.headers })
	.pipe(map(data=>data));	
  }	  

  deleteCar(id: string){
    let token = this.authService.getToken();

	const url_api = `http://localhost:3000/api/cars/${id}/?access_token=${token}`;
	return this.http.delete<CarInterface>(url_api, {})
	.pipe(map(data=>data));	
  }	  

}
