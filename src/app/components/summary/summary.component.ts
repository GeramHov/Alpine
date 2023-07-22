import { Component, OnInit } from '@angular/core';
import ICar from 'src/app/model/car.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  car!: ICar 
  filteredRimPhoto: { color: string, photo: string }[] = [];
  currentIndex: number = 0;

  constructor(private store: Store<{ configurator: any }>,) {

  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.store.select((state) => state.configurator.selectedCar).subscribe((selectedCar) => {

      this.car = selectedCar;
      this.getRimPhoto();

      // this.equipmentKeys = Object.keys(this.configuratorData.equipments);

      // this.accessoryKeys = Object.keys(this.configuratorData.accessories);

      // this.disabledEquipmentStatus = this.isBasicEquipment();
      // this.disabledAccesoryStatus = this.hasAccessory();
      console.log(this.car);
    })

  }

  getRimPhoto() {
    this.filteredRimPhoto = this.car.initial_rim.photos.filter((photo) => photo.color === this.car.initial_color.name)
    return this.filteredRimPhoto;
  }

  slideLeftExterior(): void {
    if ((this.currentIndex - 1) < 0) {
      this.currentIndex = this.car.photos.length - 1;
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
  }
  slideRightExterior(): void {
    if (this.currentIndex + 1 === this.car.photos.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
  }

  }
