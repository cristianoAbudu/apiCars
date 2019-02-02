import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  
  getAllCars() {
	const url_api = `http://localhost:3000/api/cars`;
    return this.http.get(url_api);
  }
  
  
  
}
