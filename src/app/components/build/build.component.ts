import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectConfiguratorData } from 'src/app/reducer/alpine.reducer';
import { ActivatedRoute } from '@angular/router';
import ICar from 'src/app/model/car.model';
import { afterSelection, selectColor } from 'src/app/action/configurator.action';
import { IData } from 'src/app/data/alpine';
import IColor from 'src/app/model/color.model';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss'],
})
export class BuildComponent implements OnInit {
  configuratorData!: IData;
  car!: ICar;
  currentIndex: number = 0;
  
  selectedColor: IColor | null = null;
  totalCard: boolean = false;
  passToExterior: boolean = false;
  passToInterior: boolean = false;
  passToRims: boolean = false;
  passToEquipment: boolean = false;

  // equipementCategory!: IEquipmentCategory[]
  interiorColorslides: Array<string> = [];
  rimPhoto: string = '';

  constructor(
    private store: Store<{ configurator: any }>,
    private renderer: Renderer2,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // SCROLL INTO TOP WHEN LOADED
    window.scrollTo(0, 0);

    // GETTING ID
  
    // SUBSCRIBE TO CONFIGURATOR AND GETTING DATA
    this.store.select(selectConfiguratorData).subscribe((data) => {
      this.configuratorData = data; })


      // EQUIPMENTS CATEGORY SELECT TYPES
    //   this.equipementCategory = Object.values(
    //     this.configuratorData?.equipement_category
    //   ) as IEquipmentCategory[];
    // });


    this.store.select((state)=> state.configurator.selectedCar).subscribe((selectedCar)=>{
      this.car = selectedCar
    })

  }

  getRimPhoto(colorName: string): string {
    const rim = this.car.initial_rim.find(rim => rim.color === colorName);
    return rim ? rim.photo : '';
  }
  // PRICE CARD TOGGLE FUNCTION
  toggleTotalCard(): void{
    this.totalCard = !this.totalCard;
  }

  // LOADER FUNCTIONS
  loadExteriorSection():void {
    this.passToExterior = true;
    const exteriorSection = document.getElementById('exterior');

    if (exteriorSection) {
      this.renderer.setStyle(exteriorSection, 'display', 'block');
      exteriorSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  loadInteriorSection():void {
    this.passToInterior = true;
    const interiorSection = document.getElementById('interior');

    if (interiorSection) {
      this.renderer.setStyle(interiorSection, 'display', 'block');
      interiorSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  loadRimsSection():void{
    this.passToRims = true;
    const rimsSection = document.getElementById('rims');

    if (rimsSection) {
      this.renderer.setStyle(rimsSection, 'display', 'block');
      rimsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  loadEquipmentSection():void{
    this.passToEquipment = true;
    const equipmentSection = document.getElementById('equipment');

    if (equipmentSection) {
      this.renderer.setStyle(equipmentSection, 'display', 'block');
      equipmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

// CLICK HANDLER FUNCTIONS
  handleColorClick(color: IColor) {
    this.selectedColor = color;
    console.log('Clicked Color:', color);
    this.store.dispatch(selectColor({color}))
    this.store.dispatch(afterSelection())
  }

  // handleInteriorClick(index: number) {
  //   this.clickedColorIndex = index;
  //   const clickedColor = this.interiorSelect[index];
  //   console.log('Clicked Interior:', clickedColor);
  // }
  // handleRimClick(index: number) {
  //   this.clickedColorIndex = index;
  //   const clickedColor = this.rims[index]
  //   console.log('Clicked Rims:', clickedColor);
  // }

  //SLIDER FUNCTIONS
slideLeftExterior(): void {
  if ((this.currentIndex - 1) < 0) {
    this.currentIndex = this.car.pictures.length - 1;
  } else {
    this.currentIndex = this.currentIndex - 1;
  }
}
slideRightExterior(): void {
  if (this.currentIndex + 1 === this.car.pictures.length) {
    this.currentIndex = 0;
  } else {
    this.currentIndex = this.currentIndex + 1;
  }
}
  // slideLeftInterior(): void {
  //   setTimeout(() => {
  //     this.currentIndex =
  //       (this.currentIndex - 1 + this.interiorColorslides.length) %
  //       this.interiorColorslides.length;
  //   }, 200);
  // }
  // slideRightInterior(): void {
  //   setTimeout(() => {
  //     this.currentIndex =
  //       (this.currentIndex + 1) % this.interiorColorslides.length;
  //   }, 200);
  // }
}
