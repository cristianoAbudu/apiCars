import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { CarInterface } from '../../../models/car-interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  constructor(private dataApiService: DataApiService) { }
  private cars: CarInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListCars();
  }

  getListCars(): void {
    this.dataApiService
      .getAllCars()
      .subscribe((cars: CarInterface) => (this.cars = cars));
  }

  onDeleteCar(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteCar(id).subscribe();
    }
  }

  onPreUpdateCar(car: CarInterface): void {
    this.dataApiService.selectedCar = Object.assign({}, car);
  }

  resetForm(carForm?: NgForm): void {
    this.dataApiService.selectedCar = {
      id: null,
      fabricante: '',
      marca: '',
      ano: 0,
      preco: ''
    };
  }

}


