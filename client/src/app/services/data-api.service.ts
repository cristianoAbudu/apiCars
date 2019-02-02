import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  
  cars: Observable<any>;
  car: Observable<any>;
  
  constructor(private http: HttpClient, private authService: AuthService) { }
  
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
  
  saveCar(car){
    let token = this.authService.getToken();

	const url_api = `http://localhost:3000/api/cars?access_token=${token}`;
	return this.http.post(url_api, car, { headers: this.headers })
	.pipe(map(data=>data));	
  }	  
  
  
  updateCar(car){
    let token = this.authService.getToken();

	const url_api = `http://localhost:3000/api/cars?access_token=${token}`;
	return this.http.put(url_api, car,  { headers: this.headers })
	.pipe(map(data=>data));	
  }	  

  deleteCar(id: string){
    let token = this.authService.getToken();

	const url_api = `http://localhost:3000/api/cars?access_token=${token}`;
	return this.http.delete(url_api, {})
	.pipe(map(data=>data));	
  }	  

}
