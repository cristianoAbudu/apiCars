import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { CarInterface } from '../../models/car-interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private dataApiService: DataApiService,
    private location: Location
  ) { }
  ngOnInit() {
  }

  onSaveCar(carForm: NgForm): void {
    if (carForm.value.id == null) {
      // NEW
      this.dataApiService.saveCar(carForm.value).subscribe(car => location.reload());
    } else {
      // update
      this.dataApiService.updateCar(carForm.value).subscribe(car => location.reload());
    }
  }

}