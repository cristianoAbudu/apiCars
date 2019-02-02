import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
	  this.getListCars();
	  this.getCar('1');
	  this.getOffers();
  }
  
  getListCars(){
	this.dataApi.getAllCars()
	.subscribe((cars) => console.log(cars) );
  }
    
  getCar(id: string){
	this.dataApi.getCarById(id)
	.subscribe((car) => console.log(car) );
  }    
  
  getOffers(){
	this.dataApi.getOffers()
	.subscribe((cars) => console.log(cars) );
  }      
  
}
