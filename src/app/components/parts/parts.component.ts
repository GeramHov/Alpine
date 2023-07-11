import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit{
  bodyImage: boolean = false;
  speed: boolean = false;
  speedTime: boolean = false;
  gearChangeTime: boolean = false;

  ngOnInit(): void {
      this.toggleBodyImage()
  }

  toggleBodyImage(){
    setInterval(()=>{
      this.bodyImage = !this.bodyImage;
    },2000)
  }

  toggleSpeed():void{
    this.speed = !this.speed
  }

  toggleSpeedTime():void{
    this.speedTime = !this.speedTime
  }

  toggleGearChangeTime():void{
    this.gearChangeTime = !this.gearChangeTime
  }
}
