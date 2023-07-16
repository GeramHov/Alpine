import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectConfiguratorData } from 'src/app/reducer/alpine.reducer'; // Import the selector
import { ICar, IInterior, IPhotos } from 'src/app/types/cars';
import { IColors } from 'src/app/types/colors';
import { IPerso } from 'src/app/types/personalized';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss'],
})
export class BuildComponent implements OnInit {
  configuratorData: any;
  currentIndex: number = 0;
  passToExterior: boolean = false;
  passToInterior: boolean = false;
  colors!: IColors;
  clickedColorIndex: number | null = null;
  car: ICar[] = [];
  personalizedPrice: IPerso[] = [];
  exteriorColorslides: IPhotos = [];
  interiorColorslides: IInterior[] = [];

  constructor(
    private store: Store<{ configurator: any }>,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // Subscribe to the configurator data to get updated data
    this.store.select(selectConfiguratorData).subscribe((data) => {
      this.configuratorData = data;
      // console.log('Configurator Data:', this.configuratorData);
    });

    // DEFINING EACH RECEIVED DATA
    this.car = this.configuratorData?.car;
    this.colors = this.configuratorData?.colors;
    this.exteriorColorslides = Object.values(
      this.configuratorData?.cars[1].photos
    ) as IPhotos;
    this.interiorColorslides = this.configuratorData?.interior;

    // CHECK IF MODEL IS PURE OR GT

    // if (this.configuratorData?.car[1]) {
    //   this.personalizedPrice = this.configuratorData?.car[1].price;
    // } else {
    //   this.personalizedPrice = this.configuratorData?.car[2].price;
    // }
  }

  loadExteriorSection() {
    this.passToExterior = true;
    const exteriorSection = document.getElementById('exterior');

    if (exteriorSection) {
      this.renderer.setStyle(exteriorSection, 'display', 'block');
      exteriorSection.scrollIntoView({ behavior: 'smooth' });
    }

    const totalCard = document.getElementById('total-card');
    if (totalCard) {
      this.renderer.setStyle(totalCard, 'display', 'block');
    }
  }

  loadInteriorSection() {
    this.passToInterior = true;
    const interiorSection = document.getElementById('interior');

    if (interiorSection) {
      this.renderer.setStyle(interiorSection, 'display', 'block');
      interiorSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleColorClick(index: number) {
    this.clickedColorIndex = index;
    const clickedColor = this.colors[index];
    console.log('Clicked Color:', clickedColor);
  }

  slideLeftExterior(): void {
    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.exteriorColorslides.length) %
        this.exteriorColorslides.length;
    }, 200);
  }

  slideRightExterior(): void {
    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.exteriorColorslides.length;
    }, 200);
  }

  slideLeftInterior(): void {
    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.exteriorColorslides.length) %
        this.exteriorColorslides.length;
    }, 200);
  }

  slideRightInterior(): void {
    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.exteriorColorslides.length;
    }, 200);
  }
}
