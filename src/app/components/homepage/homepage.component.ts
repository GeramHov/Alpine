import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  bodyImage: boolean = false;
  speed: boolean = false;
  speedTime: boolean = false;
  gearChangeTime: boolean = false;

  ngOnInit(): void {
    this.toggleBodyImage();
  }

  toggleBodyImage() {
    setInterval(() => {
      this.bodyImage = !this.bodyImage;
    }, 2000);
  }

  toggleSpeed(): void {
    this.speed = !this.speed;
  }

  toggleSpeedTime(): void {
    this.speedTime = !this.speedTime;
  }

  toggleGearChangeTime(): void {
    this.gearChangeTime = !this.gearChangeTime;
  }
}
