import { Component, OnInit } from '@angular/core';
import ICar from 'src/app/model/car.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{

  car: ICar =  {
    version: {
      id: 1,
      name: "A110 Pure",
      price: 62500,
      version_photo: "../assets/images/configurateur/modele/selection/pure.png",
    },
    initial_color: {
      name: "ice white",
      price: 0,
      photo: "../assets/images/configurateur/couleurs/selection/blanc.jpg",
    },
    initial_rim:
    {
      name: "standard",
      selection: "../assets/images/configurateur/jantes/selection/jante-standard.jpg",
      price: 0,
      option: "A110 Pure",
      photos: [
        {
          color: "ice white",
          photo: "../assets/images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg"
        },
        {
          color: "blue abysse",
          photo: "../assets/images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg"
        },
        {
          color: "deep black metalic",
          photo: "../assets/images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg"
        },
      ],
    },
    initial_interior: {
      name: "black dynamica",
      price: 600,
      option: "A110 Pure",
      selection: "../assets/images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg",
      photos: [
        "../assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-1.jpg",
        "../assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-2.jpg",
        "../assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-3.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-1.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-2.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-3.jpg",
      ]
    },
    features: {
      acceleration: 4.5,
      max_power: 252,
      max_speed: 250,
      torque: 320,
      engine: "1.8 inline-4 turbo",
      transmission: "7-speed automatic transmission",
      version_photo: "../../../assets/images/homepage/versions/ALPINE-PURE-1.png",
    },
    photos: [
      "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg",
      "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg",
      "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg",
      "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg",
    ],
    equipments: {
      media: [
        {
          id: 3,
          name: "audio system standard",
          photo:
            "../assets/images/configurateur/equipements/categories/media et navigation/audio-standard.jpg",
          price: 0,
        },
      ],
      design:[],
      comfort: [
        {
          id: 7,
          name: "interior mirror electrochrome",
          photo: "../assets/images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg",
          price: 0,
        },

      ],
      drive: [

      ],
      security: [
        {
          id: 15,
          name: "emergency breaking assistance",
          photo:
            "../assets/images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg",
          price: 0,
        },
        {
          id: 16,
          name: "frontal airbags",
          photo:
            "../assets/images/configurateur/equipements/categories/securite/airbag.jpg",
          price: 0,
        },
      ],
      customize: [
        {
          id: 18,
          name: "anthracite brake calipers",
          photo: '../assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg',
          price: 0,
        },
        {
          id: 21,
          name: "harmony carbon mat",
          photo:
            "../assets/images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg",
          price: 0,
        },
      ],
    },
    accessories: {
      transport_and_protection: [],
      multimedia: [],
      garage_accessories: [],
      interior: [],
      exterior: [],
    },
    total_price: {
      initial_price: 62500,
      exterior: 0,
      rims: 0,
      interior: 0,
      equipments: 0,
      accessories: 0,
      total: 62500
    }
  }

  currentIndex: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.car);

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
