import IAccessoire from "../model/accessoire.model";
import ICar from "../model/car.model";
import IColor from "../model/color.model";
import IEquipment from "../model/equipment.model";
import IRim from "../model/rim.model";
import IInterior from "../model/interior.model";

export interface IData {
  cars: ICar[],
  colors: IColor[],
  rims: IRim[],
  interior: IInterior[],
  equipments: {
    [key: string]: IEquipment[]
  },
  accessoires: {
    [key: string]: IAccessoire[]
  },
  photos: Array<{ name: string, color: string, rim: string, list: Array<string> }>
}


const DATA: IData = {
  cars: [
    {
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
        comfort: [
          {
            id: 7,
            name: "interior mirror electrochrome",
            photo: "../assets/images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg",
            price: 0,
          },
        ],
        drive: [
          {
            id: 8,
            name: "cruise control & speed limiter",
            photo:
              "../assets/images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg",
            price: 0,
          },
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
        personalize_body: [
          {
            id: 18,
            name: "anthracite brake calipers",
            photo: '../assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg',
            price: 0,
          },
        ],
        personalize_interior: [
          {
            id: 21,
            name: "harmony carbon mat",
            photo:
              "../assets/images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg",
            price: 0,
          },
        ]
      },
      accessoires: {
        Transport_et_protection: [],
        multimedia: [],
        Intérieur: [],
        Exterieur: [],
        Matériel_de_garage: [],
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
    },

    // LEGEND VERSION 2nd CAR

    {
      version: {
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
      initial_rim:
      {
        name: "legend",
        selection: "../assets/images/configurateur/jantes/selection/jante-legende.jpg",
        price: 0,
        option: "A110 Legend",
        photos: [
          {
            color: "ice white",
            photo: "../assets/images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg"
          },
          {
            color: "blue abysse",
            photo: "../assets/images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg"
          },
          {
            color: "deep black metalic",
            photo: "../assets/images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg"
          },
        ],
      },
      initial_interior: {
        name: "black leather",
        price: 0,
        option: "A110 Legend",
        selection: "../assets/images/configurateur/interieurs/selection/cuir-noir.jpg",
        photos: [
          "../assets/images/configurateur/interieurs/vues/cuir-noir-1.jpg",
          "../assets/images/configurateur/interieurs/vues/cuir-noir-2.jpg",
          "../assets/images/configurateur/interieurs/vues/cuir-noir-3.jpg",
          "../assets/images/configurateur/interieurs/vues-avant/cockpit-1.jpg",
          "../assets/images/configurateur/interieurs/vues-avant/cockpit-2.jpg",
          "../assets/images/configurateur/interieurs/vues-avant/cockpit-3.jpg",
        ]
      },
      features: {
        acceleration: 4.2,
        max_power: 300,
        max_speed: 250,
        torque: 340,
        engine: "1.8 inline-4 turbo",
        transmission: "7-speed automatic transmission",
        version_photo: "../../../assets/images/homepage/versions/ALPINE-LEGENDE-1.png",
      },
      photos: [
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg",
      ],
      equipments: {
        design: [
        ],
        media: [
          {
            id: 3,
            name: "audio system standard",
            photo:
              "../assets/images/configurateur/equipements/categories/media et navigation/audio-standard.jpg",
            price: 0,
          },
        ],
        comfort: [
          {
            id: 5,
            name: "interior mirror electrochrome",
            photo:
              "../assets/images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg",
            price: 0,
          },
        ],
        drive: [
          {
            id: 6,
            name: "cruise control & speed limiter",
            photo:
              "../assets/images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg",
            price: 0,
          },
        ],
        security: [
          {
            id: 11,
            name: "emergency breaking assistance",
            photo:
              "../assets/images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg",
            price: 0,
          },
          {
            id: 12,
            name: "frontal airbags",
            photo:
              "../assets/images/configurateur/equipements/categories/securite/airbag.jpg",
            price: 0,
          },
        ],
        personalize_body: [
          {
            id: 13,
            name: "anthracite brake calipers",
            photo: '../assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg',
            price: 0,
          },
        ],
        personalize_interior: [
          {
            id: 15,
            name: "harmony carbon mat",
            photo:
              "../assets/images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg",
            price: 0,
          },
        ]
      },
      accessoires: {
        Transport_et_protection: [],
        multimedia: [],
        Intérieur: [],
        Exterieur: [],
        Matériel_de_garage: [],
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
  interior: [
    {
      name: "black leather",
      price: 0,
      option: "A110 Legend",
      selection: "../assets/images/configurateur/interieurs/selection/cuir-noir.jpg",
      photos: [
        "../assets/images/configurateur/interieurs/vues/cuir-noir-1.jpg",
        "../assets/images/configurateur/interieurs/vues/cuir-noir-2.jpg",
        "../assets/images/configurateur/interieurs/vues/cuir-noir-3.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-1.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-2.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-3.jpg",
      ]
    },
    {
      name: "brown leather",
      price: 0,
      option: "A110 Legend",
      selection: "../assets/images/configurateur/interieurs/selection/cuir-brun.jpg",
      photos: [
        "../assets/images/configurateur/interieurs/vues/cuir-brun-1.jpg",
        "../assets/images/configurateur/interieurs/vues/cuir-brun-2.jpg",
        "../assets/images/configurateur/interieurs/vues/cuir-brun-3.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-1.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-2.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-3.jpg",
      ]
    },
    {
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
    {
      name: "perforated leather",
      price: 800,
      option: "A110 Pure",
      selection: "../assets/images/configurateur/interieurs/selection/cuir-noir_perfore.jpg",
      photos: [
        "../assets/images/configurateur/interieurs/vues/cuir-noir_perfore-1.jpg",
        "../assets/images/configurateur/interieurs/vues/cuir-noir_perfore-2.jpg",
        "../assets/images/configurateur/interieurs/vues/cuir-noir_perfore-3.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-1.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-2.jpg",
        "../assets/images/configurateur/interieurs/vues-avant/cockpit-3.jpg",
      ]
    },
  ],
  rims: [
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
    {
      name: "legend",
      selection: "../assets/images/configurateur/jantes/selection/jante-legende.jpg",
      price: 0,
      option: "A110 Legend",
      photos: [
        {
          color: "ice white",
          photo: "../assets/images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg"
        },
        {
          color: "blue abysse",
          photo: "../assets/images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg"
        },
        {
          color: "deep black metalic",
          photo: "../assets/images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg"
        },
      ],
    },
    {
      name: "serac",
      selection: "../assets/images/configurateur/jantes/selection/jante-serac.jpg",
      price: 900,
      option: "A110 Legend",
      photos: [
        {
          color: "ice white",
          photo: "../assets/images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg"
        },
        {
          color: "blue abysse",
          photo: "../assets/images/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg"
        },
        {
          color: "deep black metalic",
          photo: "../assets/images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg"
        },
      ],
    },
  ],
  equipments: {
    design: [
      {
        id: 1,
        name: "light-alloy passenger footpegs",
        photo:
          "../assets/images/configurateur/equipements/categories/design/repose-pied-alu.jpg",
        price: 96,
      },
      {
        id: 2,
        name: "heritage pack",
        photo:
          "../assets/images/configurateur/equipements/categories/design/pack-heritage.jpg",
        price: 180,
      },
    ],
    media: [
      {
        id: 3,
        name: "audio system standard",
        photo:
          "../assets/images/configurateur/equipements/categories/media et navigation/audio-standard.jpg",
        price: 0,
      },
      {
        id: 4,
        name: "alpine telematics",
        photo:
          "../assets/images/configurateur/equipements/categories/media et navigation/alpine-metrics.jpg",
        price: 204,
      },
      {
        id: 5,
        name: "audio system focal",
        photo:
          "../assets/images/configurateur/equipements/categories/media et navigation/audio-focal.jpg",
        price: 600,
      },
      {
        id: 6,
        name: "audio system focal premium",
        photo:
          "../assets/images/configurateur/equipements/categories/media et navigation/audio-premium.jpg",
        price: 1200,
      },

    ],
    comfort: [
      {
        id: 7,
        name: "interior mirror electrochrome",
        photo: "../assets/images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg",
        price: 0,
      },
      {
        id: 8,
        name: "cruise control & speed limiter",
        photo:
          "../assets/images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg",
        price: 0,
      },
      {
        id: 9,
        name: "electric heated front mirrors",
        photo:
          "../assets/images/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg",
        price: 504,
      },
      {
        id: 10,
        name: "alpine pack storage",
        photo:
          "../assets/images/configurateur/equipements/categories/confort/pack-rangement.jpg",
        price: 504,
      },

    ],
    drive: [
      {
        id: 11,
        name: "rear parctronic",
        photo:
          "../assets/images/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg",
        price: 420,
      },
      {
        id: 12,
        name: "front & rear parctronic",
        photo:
          "../assets/images/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg",
        price: 750,
      },
      {
        id: 13,
        name: "front & rear parctronic with rear-view camera",
        photo:
          "../assets/images/configurateur/equipements/categories/conduite/camera-recul.jpg",
        price: 1200,
      },
      {
        id: 14,
        name: "active sport exhaust",
        photo:
          "../assets/images/configurateur/equipements/categories/conduite/echappement-sport.jpg",
        price: 1500,
      }
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
      {
        id: 17,
        name: "high-perfermance breaks 320mm",
        photo:
          "../assets/images/configurateur/equipements/categories/securite/freinage-haute-perf.jpg",
        price: 1000,
      },
    ],
    personalize_body: [
      {
        id: 18,
        name: "anthracite brake calipers",
        photo:
          "../assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg",
        price: 0,
      },
      {
        id: 19,
        name: "front fender logos",
        photo:
          "../assets/images/configurateur/equipements/categories/personnalisation exterieure/logo-alpine.jpg",
        price: 120,
      },
      {
        id: 20,
        name: "blue alpine brake calipers",
        photo:
          "../assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-bleu.jpg",
        price: 384,
      },

    ],
    personalize_interior: [
      {
        id: 21,
        name: "harmony carbon mat",
        photo:
          "../assets/images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg",
        price: 0,
      },
      {
        id: 22,
        name: "steering wheel blue logo",
        photo:
          "../assets/images/configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg",
        price: 84,
      },
      {
        id: 23,
        name: "aluminum pedals",
        photo:
          "../assets/images/configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg",
        price: 120,
      },

      {
        id: 24,
        name: "heated seats",
        photo:
          "../assets/images/configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg",
        price: 400,
      },
    ]
  },
  accessoires: {
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
  photos: [
    {
      name: "A110 Pure",
      color: "ice white",
      rim: "standard",
      list: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg",
      ]
    },

    {
      name: "A110 Pure",
      color: "blue abysse",
      rim: "standard",
      list: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (4).jpg",
      ]
    },

    {
      name: "A110 Pure",
      color: "deep black metalic",
      rim: "standard",
      list: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (4).jpg",
      ]
    },
    {
      name: "A110 Pure",
      color: "ice white",
      rim: "serac",
      list: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg",
      ]
    },
    {
      name: "A110 Pure",
      color: "blue abysse",
      rim: "serac",
      list: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg",
      ]
    },
    {
      name: "A110 Pure",
      color: "deep black metalic",
      rim: "serac",
      list: [
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg",
        "../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg",
      ]
    },
    {
      name: "A110 Legend",
      color: "ice white",
      rim: "legend",
      list: [
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg",
      ]
    },
    {
      name: "A110 Legend",
      color: "blue abysse",
      rim: "legend",
      list: [
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg",
      ]
    },

    {
      name: "A110 Legend",
      color: "deep black metalic",
      rim: "legend",
      list: [
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg",
        "../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg",
      ]
    },
  ]
};
export default DATA;