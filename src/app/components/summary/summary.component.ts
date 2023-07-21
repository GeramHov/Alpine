import { Component, OnInit } from '@angular/core';
import ICar from 'src/app/model/car.model';
import { IData } from 'src/app/data/alpine';
import { Store } from '@ngrx/store';
import { Carousel, initTE } from 'tw-elements'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  configuratorData!: IData;
  car!: ICar;

  constructor(private store: Store<{ configurator: any }>){}

  ngOnInit(): void {

    initTE({ Carousel });

    this.store.select((state) => state.configurator.selectedCar).subscribe((selectedCar) => {

      this.car = selectedCar;

      console.log(this.car);
      
      // this.getRimPhoto();

      // this.equipmentKeys = Object.keys(this.configuratorData.equipments);

      // this.accessoryKeys = Object.keys(this.configuratorData.accessories);

      // this.disabledEquipmentStatus = this.isBasicEquipment();
      // this.disabledAccesoryStatus = this.hasAccessory();
    })
  }
}
