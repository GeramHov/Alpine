import { Component, OnInit } from '@angular/core';
import { SlideInterface } from 'src/app/types/image.type';
import { Store } from '@ngrx/store';
import { selectConfiguratorData } from 'src/app/reducer/alpine.reducer';
import ICar from 'src/app/model/car.model';
import { selectCar } from 'src/app/action/configurator.action';
import { Router } from '@angular/router';
import { IData } from 'src/app/data/alpine';

@Component({
  selector: 'app-prebuild',
  templateUrl: './prebuild.component.html',
  styleUrls: ['./prebuild.component.scss'],
})
export class PrebuildComponent implements OnInit {
  configuratorData!: IData;
  carsArray: any[] = [];
  slides: SlideInterface[] = [
    {
      url: '../../../assets/images/homepage/galerie/A110_LEGENDE_1.jpg',
      title: 'legend1',
    },
    {
      url: '../../../assets/images/homepage/galerie/A110_LEGENDE_5.jpg',
      title: 'legend2',
    },
    {
      url: '../../../assets/images/homepage/galerie/A110_LEGENDE_9.jpg',
      title: 'legend3',
    },
    {
      url: '../../../assets/images/homepage/galerie/A110_PE_1.jpg',
      title: 'pe',
    },
    {
      url: '../../../assets/images/homepage/galerie/A110_PE_7.jpg',
      title: 'pe2',
    },
    {
      url: '../../../assets/images/homepage/galerie/A110_PE_9.jpg',
      title: 'pe3',
    },
    {
      url: '../../../assets/images/homepage/galerie/A110_PURE_4.jpg',
      title: 'pure',
    },
    {
      url: '../../../assets/images/homepage/galerie/A110_PURE_6.jpg',
      title: 'pure2',
    },
    {
      url: '../../../assets/images/homepage/galerie/A110_PURE_8.jpg',
      title: 'pure3',
    },
  ];
  leave: boolean = false;
  come: boolean = false;
  clicked: boolean = false;

  currentIndex: number = 0;

  constructor(private store: Store<{ configurator: any }>, private router : Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.store.select(selectConfiguratorData).subscribe((data) => {
      this.configuratorData = data;
      // console.log('Configurator Data:', this.configuratorData);
    });

    // DEFINITION OF ARRAY

    // CALL THE SLIDE SHOW
    setInterval(() => {
      // console.log('slide');
      
      this.slideRight();
    }, 3000);

  }
  // CONSTRUCT ARRAY OF TWO OBJECTS OF CARS
  
  selectVersion(car: ICar) {
    this.store.dispatch(selectCar({ car }))
    this.router.navigate(["build"])
  }

  slideRight(): void {
    this.clicked = true;
    this.come = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.come = false;
    }, 200);
  }

  slideToSelect(): void {
    const selectSection = document.getElementById('select');
    if (selectSection) {
      selectSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

