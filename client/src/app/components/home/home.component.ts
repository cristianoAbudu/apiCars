import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { CarInterface } from "../../models/car-interface";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private cars: CarInterface;


  ngOnInit() {
	  this.getListCars(); 
  }
  
  getListCars(){
	this.dataApi.getNoOffers()
	.subscribe((cars: CarInterface) => (this.cars = cars) );
  }
  
}
