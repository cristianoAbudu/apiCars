import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CarInterface } from 'src/app/models/car-interface';

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.css']
})
export class DetailsCarComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  
  private car: CarInterface = {
    modelo: '',
    fabricante: '',
    ano: null,
    preco: ''
  };
  
  ngOnInit() {
    const car_id = this.route.snapshot.params['id'];
    this.getDetails(car_id);
  }

  getDetails(id: string) {
    this.dataApi.getCarById(id).subscribe(car => (this.car = car));
  }
}
