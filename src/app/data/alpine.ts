import IAccessoire from "../model/accessoire.model";
import ICar from "../model/car.model";
import IColor from "../model/color.model";
import IEquipment from "../model/equipment.model";
import IRim from "../model/rim.model";
import ISellerie from "../model/sellerie.model";

export interface IData {
  cars : ICar[],
  colors : IColor[],
  rims : IRim[],
  sellerie : ISellerie[],
  equipements : {
    [key:string] : IEquipment[]
  },
  accessoires : {
    [key:string] : IAccessoire[]
  },
  pictures : Array<{name : string, color : string, jante : string, picturesList : Array<string>}>
}


 const DATA : IData = {
  cars: [
    {
     version : {
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
     initial_rim: [
      {
       name: "standard",
       photo:
        "../assets/images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg",
       price: 0,
       option :'A110 Pure',
       color: 'ice white'
     },
     {
      name: "standard",
      photo:
       "../assets/images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg",
      price: 0,
      option :'A110 Pure',
      color: 'blue abysse'
     },
     {
      name: "standard",
      photo:
       "../assets/images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg",
      price: 0,
      option :'A110 Pure',
      color: 'deep black metalic'
     },
    ],
     scellerie : {
       name: "cuir noir et dynamica",
       picture:
         "../assets/images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg",
       price: 0,
       option : "",
             pictures : [
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
     pictures: [
       "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg",
       "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg",
       "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg",
       "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg",
     ],
     equipements: {
       media_et_naviguation: [
          {
           id: 3,
           name: "Système Audio standard",
           picture:
           "../assets/images/configurateur/equipements/categories/media et navigation/audio-standard.jpg",
           price: 0,
          },
        ],
       confort: [
         {
           id: 5, 
           name: "Retroviseur intérieur électrochrome",
           picture:"../assets/images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg",
           price: 0,
          },
        ],
       conduite : [
          {
           id: 6,
           name: "Régulateur / limiteur de vitesse",
           picture:
             "../assets/images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg",
           price: 0,
         },
        ],
       securite: [
         {
           id : 11,
           name: "Assistance au freinage d'urgence",
           picture:
           "../assets/images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg",
           price: 0,
          },
          {
            id: 12,
            name: "Airbags frontaux conducteur et passager",
            picture:
            "../assets/images/configurateur/equipements/categories/securite/airbag.jpg",
            price: 0,
          },
      ],
      perso_extérieure:[
         {
           id: 13,
           name: "Etriers de frein couleur Gris Anthracite",
           picture:'../assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg',
           price: 0,
         },
        ],
       perso_intérieur:[
         {
             id: 15,
             name: "Harmonie carbone mat",
             picture:
               "../assets/images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg",
             price: 0,
           },
      ]
     },
     accessoires: {
       Transport_et_protection: [],
       multimedia:[],
       Intérieur:[],
       Exterieur:[],
       Matériel_de_garage:[],
     },
   },

   //voiture 2 la legende

   {
    version : {

      id: 2,
      name: "A110 Legend",
      price: 72500,
      version_photo: "../assets/images/configurateur/modele/selection/legende.png",
    },
    initial_color: {
       name: "ice white",
       price: 0,
       photo: "../assets/images/configurateur/couleurs/selection/blanc.jpg",
     },
     initial_rim: [
      {
       name: "legend",
       photo:
        "../assets/images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg",
       price: 0,
       option :'A110 Legend',
       color: 'ice white'
     },
     {
      name: "legend",
      photo:
       "../assets/images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg",
      price: 0,
      option :'A110 Legend',
      color: 'blue abysse'
     },
     {
      name: "legend",
      photo:
       "../assets/images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg",
      price: 0,
      option :'A110 Legend',
      color: 'deep black metalic'
     },
    ],
     scellerie: {
       name: "Sièges Confort en cuir noir",
       picture: "../assets/images/configurateur/interieurs/selection/cuir-noir.jpg",
       price: 0,
       option : "",
       pictures : [
      ]
     },
     features: {
      acceleration: 4.5,
      max_power: 252,
      max_speed: 250,
      torque: 320,
      engine: "1.8 inline-4 turbo",
      transmission: "7-speed automatic transmission",
      version_photo: "../../../assets/images/homepage/versions/ALPINE-LEGENDE-1.png",
    },
     pictures: [
       "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",
       "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
       "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
       "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg",
     ],
     equipements: {
       design: [
  
       ],
       media_et_naviguation: [
         {
           id: 3,
           name: "Système Audio standard",
           picture:
           "../assets/images/configurateur/equipements/categories/media et navigation/audio-standard.jpg",
           price: 0,
         },
      ],
       confort: [
         {
           id: 5,
           name: "Retroviseur intérieur électrochrome",
           picture:
             "../assets/images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg",
           price: 0,
         },
      ],
       conduite : [
         {
           id: 6,
           name: "Régulateur / limiteur de vitesse",
           picture:
             "../assets/images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg",
           price: 0,
         },
      ],
       securite: [
         {
           id: 11,
           name: "Assistance au freinage d'urgence",
           picture:
             "../assets/images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg",
           price: 0,
         },
         {
           id: 12,
           name: "Airbags frontaux conducteur et passager",
           picture:
             "../assets/images/configurateur/equipements/categories/securite/airbag.jpg",
           price: 0,
         },
      ],
       perso_extérieure:[
         {
           id: 13,
           name: "Etriers de frein couleur Gris Anthracite",
           picture:'../assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg',
           price: 0,
         },
        ],
       perso_intérieur:[
         {
           id: 15,
           name: "Harmonie carbone mat",
           picture:
           "../assets/images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg",
           price: 0,
          },
       ]
    },
     accessoires: {
       Transport_et_protection: [],
       multimedia:[],
       Intérieur:[],
       Exterieur:[],
       Matériel_de_garage:[],
     },
    },
  ],
  //choix des améliorations voitures
  colors: [
    {
      name: "ice white",
      price: 0,
      photo: "../assets/images/configurateur/couleurs/selection/blanc.jpg",
    },
    {
      name: "blue abysse",
      photo: "../assets/images/configurateur/couleurs/selection/bleu.jpg",
      price: 840,
    },
    {
      name: "deep black metalic",
      photo: "../assets/images/configurateur/couleurs/selection/noir.jpg",
      price: 1800,
    },
  ],
  sellerie: [
    {
      name: "cuir noir et dynamica",
      picture:
      "../assets/images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg",
      price: 0,
      option: "A110 Pure",
      pictures : [
      ]
    },
    {
      name: "Sièges Confort en cuir noir perforé",
      picture:
      "../assets/images/configurateur/interieurs/selection/cuir-noir_perfore.jpg",
      price: 800,
      option: "A110 Pure",
      pictures : [
      ]
    },
    {
      name: "Sièges Confort en cuir noir",
      picture: "../assets/images/configurateur/interieurs/selection/cuir-noir.jpg",
      price: 0,
      option: "A110 Legend",
      pictures : [
      ]
    },
    {
      name: "Sièges Confort en cuir brun",
      picture: "../assets/images/configurateur/interieurs/selection/cuir-brun.jpg",
      price: 800,
      option: "A110 Legend",
      pictures : [
      ]
    },
  ],
  rims: [
    {
      name: "standard",
      photo: "../assets/images/configurateur/jantes/selection/jante-standard.jpg",
      price: 0,
      option: "A110 Pure",
      color: '',
    },
    {
      name: "legend",
      photo: "../assets/images/configurateur/jantes/selection/jante-legende.jpg",
      price: 0,
      option: "A110 Legend",
      color: '',
    },
    {
      name: "serac",
      photo: "../assets/images/configurateur/jantes/selection/jante-serac.jpg",
      price: 1000,
      option: "A110 Pure",
      color: '',
    },
  ],
  equipements: {
    design: [

      {
        id: 1,
        name: "Pack héritage",
        picture:
        "../assets/images/configurateur/equipements/categories/design/pack-heritage.jpg",
        price: 180,
      },
      {
        id: 2,
        name: "Repose-pieds passager aluminium",
        picture:
        "../assets/images/configurateur/equipements/categories/design/repose-pied-alu.jpg",
        price: 96,
      },
    ],
    media_et_naviguation: [
      {
        id: 3,
        name: "Système Audio standard",
        picture:
          "../assets/images/configurateur/equipements/categories/media et navigation/audio-standard.jpg",
        price: 0,
      },
      {
        id: 3,
        name: "Système Audio Focal",
        picture:
          "../assets/images/configurateur/equipements/categories/media et navigation/audio-focal.jpg",
        price: 600,
      },
      {
        id: 3,
        name: "Système Audio Focal Premium",
        picture:
          "../assets/images/configurateur/equipements/categories/media et navigation/audio-premium.jpg",
        price: 1200,
      },
      {
        id: 4,
        name: "Alpine Télémétrics",
        picture:
        "../assets/images/configurateur/equipements/categories/media et navigation/alpine-metrics.jpg",
        price: 204,
      }
    ],
    confort: [
      {
        id: 5,
        name: "Retroviseur int électrochrome",
        picture:"../assets/images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg",
        price: 0,
      },
      {
        id: 6,
        name: "Régulateur & limiteur de vitesse",
        picture:
          "../assets/images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg",
        price: 0,
      },
      {
        id: 7,
        name: "Rétroviseurs ext. chauf.élec",
        picture:
          "../assets/images/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg",
        price: 504,
      },
      {
        id: 8,
        name: "Alpine Pack de rangement",
        picture:
          "../assets/images/configurateur/equipements/categories/confort/pack-rangement.jpg",
        price: 504,
      },
    
    ],
    conduite: [
      {
        id: 9,
        name: "Aide au stationnement AR",
        picture:
          "../assets/images/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg",
        price: 420,
      },
      {
        id: 9,
        name: "Aide au stationnement AV/AR",
        picture:
          "../assets/images/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg",
        price: 750,
      },
      {
        id: 9,
        name: "Aide au stationnement AV/AR camérarecul",
        picture:
          "../assets/images/configurateur/equipements/categories/conduite/camera-recul.jpg",
        price: 1200,
      },
      {
        id: 10,
        name: "Echappement Sport actif",
        picture:
          "../assets/images/configurateur/equipements/categories/conduite/echappement-sport.jpg",
        price: 1500,
      }  
    ],
    securite: [
      {
        id: 11,
        name: "Assistance au freinage d'urgence",
        picture:
          "../assets/images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg",
        price: 0,
      },
      {
        id: 12,
        name: "Airbags frontaux conducteur/passager",
        picture:
          "../assets/images/configurateur/equipements/categories/securite/airbag.jpg",
        price: 0,
      },
      {
        id: 11,
        name: "freinage Haute-Perf 320mm",
        picture:
          "../assets/images/configurateur/equipements/categories/securite/freinage-haute-perf.jpg",
        price: 1000,
      },
    ],
    perso_extérieure: [
      {
        id: 13,
        name: "Etriers de frein Gris Anthracite",
        picture:
          "../assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg",
        price: 0,
      },
      {
        id: 13,
        name: " Etriers de frein Bleu Alpine",
        picture:
          "../assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-bleu.jpg",
        price: 384,
      },
      {
        id: 14,
        name: "Logo Alpine ailes avant",
        picture:
          "../assets/images/configurateur/equipements/categories/personnalisation exterieure/logo-alpine.jpg",
        price: 120,
      },
    ],
    perso_intérieur: [
      {
        id: 15,
        name: "Harmonie carbone mat",
        picture:
          "../assets/images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg",
        price: 0,
      },
      {
        id: 16,
        name: "Pédalier en aluminium",
        picture:
          "../assets/images/configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg",
        price: 120,
      },
      {
        id: 17,
        name: "Logo volant Bleu Alpine",
        picture:
          "../assets/images/configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg",
        price: 84,
      },
      {
        id: 18,
        name: "Sièges chauffants",
        picture:
          "../assets/images/configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg",
        price: 400,
      },
    ]
  },
  accessoires : {
    Transport_et_protection: [
      {
        id: 1,
        name: "Extincteur 1kg",
        picture: "../assets/images/configurateur/accessoires/transport et protection/extincteur.jpg",
        price: 22,
      },
      {
        id: 2,
        name: "Chaine Premium Grip",
        picture: "../assets/images/configurateur/accessoires/transport et protection/chaaine-neige.jpg",
        price: 336,
      },
      {
        id: 3,
        name: "Alpine Alarme",
        picture: "../assets/images/configurateur/accessoires/transport et protection/alarme.jpg",
        price: 543,
      },
      {
        id: 4,
        name: "Protection Prise OBD",
        picture: "../assets/images/configurateur/accessoires/transport et protection/protection-obd.jpg",
        price: 99,
      },
      {
        id: 5,
        name: "Kit de sécurité",
        picture: "../assets/images/configurateur/accessoires/transport et protection/kit-securite.jpg",
        price: 20,
      },
      {
        id: 6,
        name: "Fixation extincteur",
        picture: "../assets/images/configurateur/accessoires/transport et protection/fixation-extincteur.jpg",
        price: 72,
      },
    ],
    multimedia: [
      {
        id: 7,
        name: "Support caméra sport",
        picture: "../assets/images/configurateur/accessoires/multimedia/support-camera.jpg",
        price: 89,
      },
      {
        id: 8,
        name: "Support smartphone magnétique",
        picture: "../assets/images/configurateur/accessoires/multimedia/support-smartphone.jpg",
        price: 21,
      },
    ],
    Intérieur: [
      {
        id: 9,
        name: "Tapis de coffre",
        picture: "../assets/images/configurateur/accessoires/interieur/tapis-coffre.jpg",
        price: 59,
      },
      {
        id: 10,
        name: "Filet de rangement - Horizontal",
        picture: "../assets/images/configurateur/accessoires/interieur/filet-rangement.jpg",
        price: 59,
      },
    ],
    Matériel_de_garage: [
      {
        id: 11,
        name: "Chargeur batterie",
        picture: "../assets/images/configurateur/accessoires/garage/chargeur-batterie.jpg",
        price: 240,
      },
      {
        id: 12,
        name: "Kit Outils Alpine",
        picture: "../assets/images/configurateur/accessoires/garage/kit-outils.jpg",
        price: 398,
      },
    ],
    Exterieur: [
      {
        id: 13,
        name: "Cabochons Alpine - Métalisés",
        picture: "../assets/images/configurateur/accessoires/exterieur/antivol-jantes.jpg",
        price: 24,
      },
      {
        id: 14,
        name: "Housse de protection Alpine",
        picture: "../assets/images/configurateur/accessoires/exterieur/housse.jpg",
        price: 216,
      },
      {
        id: 15,
        name: "Antivols pour jante - Noirs",
        picture: "../assets/images/configurateur/accessoires/exterieur/cabochons-metal.jpg",
        price: 51,
      },
    ],
  },
  pictures: [
    {
      name: "A110 Pure",
      color: "ice white",
      jante: "standard",
      picturesList: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg",
      ]
    },
  
    {
      name: "A110 Pure",
      color: "blue abysse",
      jante: "standard",
      picturesList: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (4).jpg",
      ]
    },
  
    {
      name: "A110 Pure",
      color: "deep black metalic",
      jante: "standard",
      picturesList: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (4).jpg",
      ]
    },
    {
      name: "A110 Pure",
      color: "blanc glacier",
      jante: "serac",
      picturesList: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg",
      ]
    },
    {
      name: "A110 Pure",
      color: "Teinte spéciale Bleu Alpine",
      jante: "serac",
      picturesList: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg",
      ]
    },
    {
      name: "A110 Pure",
      color: "Teinte métallisée Noir Profond",
      jante: "serac",
      picturesList: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg",
      ]
    },
    {
      name: "A110 Legend",
      color: "blanc glacier",
      jante: "legend",
      picturesList: [
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg",
      ]
    },
    {
      name: "A110 Legend",
      color: "Teinte spéciale Bleu Alpine",
      jante: "legend",
      picturesList: [
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg",
      ]
    },
  
    {
      name: "A110 Legend",
      color: "Teinte métallisée Noir Profond",
      jante: "legend",
      picturesList: [
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg",
      ]
    },
  ]
};
export default DATA;