import { Component, OnInit } from '@angular/core';
import { SlideInterface } from 'src/app/types/image.type';
import { Store } from '@ngrx/store';
import { selectConfiguratorData } from 'src/app/reducer/alpine.reducer'; // Import the selector

@Component({
  selector: 'app-prebuild',
  templateUrl: './prebuild.component.html',
  styleUrls: ['./prebuild.component.scss'],
})
export class PrebuildComponent implements OnInit {
  configuratorData: any;
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

  constructor(private store: Store<{ configurator: any }>) {}

  ngOnInit(): void {
    this.store.select(selectConfiguratorData).subscribe((data) => {
      this.configuratorData = data;
      console.log('Configurator Data:', this.configuratorData);
    });

    if (!this.clicked) {
      setInterval(() => {
        this.slideRight();
      }, 3000);
    } else return;
  }

  // slideLeft(): void {
  //   this.clicked = true;
  //   this.leave = true;
  //   setTimeout(() => {
  //     this.currentIndex =
  //       (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  //     this.leave = false;
  //   }, 200);
  // }

  slideRight(): void {
    this.clicked = true;
    this.come = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.come = false;
    }, 200);
  }
}
