import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent implements OnInit{

  villefranche: boolean = true;
  clermont: boolean = false;
  valence: boolean = false;

  ngOnInit(): void {
    
  }

  toggleVillefrancheMainAddress(){
    this.villefranche = true;
    this.clermont = false;
    this.valence = false;
  }

  toggleClermontMainAddress(){
    this.clermont = true;
    this.villefranche = false;
    this.valence = false;
  }

  toggleValencetMainAddress(){
    this.valence = true;
    this.villefranche = false;
    this.clermont = false;
  }
}
