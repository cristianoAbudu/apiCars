import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { CarInterface } from "../../models/car-interface";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private cars: CarInterface;


  ngOnInit() {
	  this.getOffers(); 
  }
  
  getOffers(){
	this.dataApi.getOffers()
	.subscribe((cars: CarInterface) => (this.cars = cars) );
  }

}
