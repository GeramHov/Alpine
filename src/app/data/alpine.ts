const DATA = {
  cars: {
    //initialise la valeur par défaut
    //creer les états initiaux de la voiture
    1: {
      id: 1,
      name: 'A110 Pure',
      price: 62500,
      photo: 'images/configurateur/modele/selection/pure.png',
      colors: {
        name: 'blanc glacier',
        price: 0,
        photo:
          '.../../../assets/images/configurateur/couleurs/selection/blanc.jpg',
      },
      rims: {
        name: 'standard',
        photo: 'images/configurateur/rims/selection/jante-standard.jpg',
        price: 1000,
      },
      interior: {
        name: 'cuir noir et dynamica',
        photo:
          'images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg',
        price: 2000,
      },
      photos: {
        1: '../../../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg',
        2: '../../../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg',
        3: '../../../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg',
        4: '../../../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg',
      },
      equipements: {
        media: {
          3: {
            id: 3,
            name: 'Système Audio standard',
            photo:
              'images/configurateur/equipements/categories/media et navigation/audio-standard.jpg',
            price: 0,
          },
        },
        confort: {
          5: {
            id: 5,
            name: 'Retroviseur interior électrochrome',
            photo:
              'images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg',
            price: 0,
          },
        },
        drive: {
          6: {
            id: 6,
            name: 'Régulateur / limiteur de vitesse',
            photo:
              'images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg',
            price: 0,
          },
        },
        security: {
          11: {
            id: 11,
            name: "Assistance au freinage d'urgence",
            photo:
              'images/configurateur/equipements/categories/security/aide-freinage-durgence.jpg',
            price: 0,
          },
          12: {
            id: 12,
            name: 'Airbags frontaux conducteur et passager',
            photo:
              'images/configurateur/equipements/categories/security/airbag.jpg',
            price: 0,
          },
        },
        perso_exterior: {
          13: {
            id: 13,
            name: 'Etriers de frein couleur Gris Anthracite',
            photo:
              'images/configurateur/equipements/categories/personnalisation exteriore/etrier-gris.jpg',
            price: 0,
          },
        },
        perso_interior: {
          15: {
            id: 15,
            name: 'Harmonie carbone mat',
            photo:
              'images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg',
            price: 0,
          },
        },
      },
      accessories: {
        transport_and_protection: {},
        multimedia: {},
        interior: {},
        exterior: {},
        materials_garage: {},
      },
    },

    //voiture 2 la legende
    2: {
      name: 'A110 GT',
      price: 72500,
      photo: 'images/configurateur/modele/selection/legende.png',
      id: 2,
      colors: {
        name: 'blanc glacier',
        price: 0,
        photo: 'images/configurateur/colors/selection/blanc.jpg',
      },
      rims: {
        name: 'legend',
        photo: 'images/configurateur/rims/selection/jante-legende.jpg',
        price: 1000,
      },
      interior: {
        name: 'Sièges Confort en cuir noir',
        photo: 'images/configurateur/interieurs/selection/cuir-noir.jpg',
        price: 2000,
      },
      photos: {
        1: 'images/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-1.jpg',
        2: 'images/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-2.jpg',
        3: 'images/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-3.jpg',
        4: 'images/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-4.jpg',
      },
      equipements: {
        design: {},
        media: {
          3: {
            id: 3,
            name: 'Système Audio standard',
            photo:
              'images/configurateur/equipements/categories/media et navigation/audio-standard.jpg',
            price: 0,
          },
        },
        confort: {
          5: {
            id: 5,
            name: 'Retroviseur interior électrochrome',
            photo:
              'images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg',
            price: 0,
          },
        },
        drive: {
          6: {
            id: 6,
            name: 'Régulateur / limiteur de vitesse',
            photo:
              'images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg',
            price: 0,
          },
        },
        security: {
          11: {
            id: 11,
            name: "Assistance au freinage d'urgence",
            photo:
              'images/configurateur/equipements/categories/security/aide-freinage-durgence.jpg',
            price: 0,
          },
          12: {
            id: 12,
            name: 'Airbags frontaux conducteur et passager',
            photo:
              'images/configurateur/equipements/categories/security/airbag.jpg',
            price: 0,
          },
        },
        perso_exterior: {
          13: {
            id: 13,
            name: 'Etriers de frein couleur Gris Anthracite',
            photo:
              'images/configurateur/equipements/categories/personnalisation exteriore/etrier-gris.jpg',
            price: 0,
          },
        },
        perso_interior: {
          15: {
            id: 15,
            name: 'Harmonie carbone mat',
            photo:
              'images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg',
            price: 0,
          },
        },
      },
      accessories: {
        transport_and_protection: {},
        multimedia: {},
        interior: {},
        exterior: {},
        materials_garage: {},
      },
    },
  },

  //choix des améliorations voitures
  colors: {
    1: {
      name: 'blanc glacier',
      price: 0,
      photo:
        '.../../../assets/images/configurateur/couleurs/selection/blanc.jpg',
    },
    2: {
      name: 'deep black metalic',
      photo:
        '.../../../assets/images/configurateur/couleurs/selection/noir.jpg',
      price: 840,
    },
    3: {
      name: 'blue abysse',
      photo:
        '.../../../assets/images/configurateur/couleurs/selection/bleu.jpg',
      price: 1800,
    },
  },
  interior: {
    1: {
      name: 'cuir noir et dynamica',
      photo: {
        1: '../../../assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-1.jpg',
        2: '../../../assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-2.jpg',
        3: '../../../assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-3.jpg',
      },
      price: 0,
      option: 'A110 Pure',
    },
    2: {
      name: 'Sièges Confort en cuir noir perforé',
      photo: {
        1: '../../../assets/images/configurateur/interieurs/vues/cuir-noir_perfore-1.jpg',
        2: '../../../assets/images/configurateur/interieurs/vues/cuir-noir_perfore-2.jpg',
        3: '../../../assets/images/configurateur/interieurs/vues/cuir-noir_perfore-3.jpg',
      },
      price: 800,
      option: 'A110 Pure',
    },
    3: {
      name: 'Sièges Confort en cuir noir',
      photo: {
        1: '../../../assets/images/configurateur/interieurs/vues/cuir-noir-1.jpg',
        2: '../../../assets/images/configurateur/interieurs/vues/cuir-noir-2.jpg',
        3: '../../../assets/images/configurateur/interieurs/vues/cuir-noir-3.jpg',
      },
      price: 0,
      option: 'A110 Legend',
    },
    4: {
      name: 'Sièges Confort en cuir brun',
      photo: {
        1: '../../../assets/images/configurateur/interieurs/vues/cuir-brun-1.jpg',
        2: '../../../assets/images/configurateur/interieurs/vues/cuir-brun-2.jpg',
        3: '../../../assets/images/configurateur/interieurs/vues/cuir-brun-3.jpg',
      },
      price: 800,
      option: 'A110 Legend',
    },
  },
  rims: {
    1: {
      name: 'standard',
      photo: 'images/configurateur/rims/selection/jante-standard.jpg',
      price: 0,
      option: 'A110 Pure',
    },
    2: {
      name: 'serac',
      photo: 'images/configurateur/rims/selection/jante-serac.jpg',
      price: 1000,
      option: 'A110 Pure',
    },
    3: {
      name: 'legend',
      photo: 'images/configurateur/rims/selection/jante-legende.jpg',
      price: 0,
      option: 'A110 Legend',
    },
  },
  equipements: {
    design: {
      1: {
        id: 1,
        name: 'Pack héritage',
        photo:
          'images/configurateur/equipements/categories/design/pack-heritage.jpg',
        price: 180,
      },
      2: {
        id: 2,
        name: 'Repose-pieds passager aluminium',
        photo:
          'images/configurateur/equipements/categories/design/repose-pied-alu.jpg',
        price: '96',
      },
    },
    media: {
      1: {
        id: 3,
        name: 'Système Audio standard',
        photo:
          'images/configurateur/equipements/categories/media et navigation/audio-standard.jpg',
        price: 0,
      },
      2: {
        id: 3,
        name: 'Système Audio Focal',
        photo:
          'images/configurateur/equipements/categories/media et navigation/audio-focal.jpg',
        price: 600,
      },
      3: {
        id: 3,
        name: 'Système Audio Focal Premium',
        photo:
          'images/configurateur/equipements/categories/media et navigation/audio-premium.jpg',
        price: 1200,
      },
      4: {
        id: 4,
        name: 'Alpine Télémétrics',
        photo:
          'images/configurateur/equipements/categories/media et navigation/alpine-metrics.jpg',
        price: 204,
      },
    },
    confort: {
      1: {
        id: 5,
        name: 'Retroviseur int électrochrome',

        photo:
          'images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg',
        price: 0,
      },
      2: {
        id: 6,
        name: 'Régulateur & limiteur de vitesse',
        photo:
          'images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg',
        price: 0,
      },
      3: {
        id: 7,
        name: 'Rétroviseurs ext. chauf.élec',
        photo:
          'images/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg',
        price: 504,
      },
      4: {
        id: 8,
        name: 'Alpine Pack de rangement',
        photo:
          'images/configurateur/equipements/categories/confort/pack-rangement.jpg',
        price: 504,
      },
    },
    drive: {
      1: {
        id: 9,
        name: 'Aide au stationnement AR',
        photo:
          'images/configurateur/equipements/categories/drive/aide-stationnement-ar.jpg',
        price: 420,
      },
      2: {
        id: 9,
        name: 'Aide au stationnement AV/AR',
        photo:
          'images/configurateur/equipements/categories/drive/aide-stationnement-av-ar.jpg',
        price: 750,
      },
      3: {
        id: 9,
        name: 'Aide au stationnement AV/AR camérarecul',
        photo:
          'images/configurateur/equipements/categories/drive/camera-recul.jpg',
        price: 1200,
      },
      4: {
        id: 10,
        name: 'Echappement Sport actif',
        photo:
          'images/configurateur/equipements/categories/drive/echappement-sport.jpg',
        price: 1500,
      },
    },
    security: {
      1: {
        id: 11,
        name: "Assistance au freinage d'urgence",
        photo:
          'images/configurateur/equipements/categories/security/aide-freinage-durgence.jpg',
        price: 0,
      },
      2: {
        id: 12,
        name: 'Airbags frontaux conducteur/passager',
        photo:
          'images/configurateur/equipements/categories/security/airbag.jpg',
        price: 0,
      },
      3: {
        id: 11,
        name: 'freinage Haute-Perf 320mm',
        photo:
          'images/configurateur/equipements/categories/security/freinage-haute-perf.jpg',
        price: 1000,
      },
    },
    perso_exterior: {
      1: {
        id: 13,
        name: 'Etriers de frein Gris Anthracite',
        photo:
          'images/configurateur/equipements/categories/personnalisation exteriore/etrier-gris.jpg',
        price: 0,
      },
      2: {
        id: 13,
        name: ' Etriers de frein Bleu Alpine',
        photo:
          'images/configurateur/equipements/categories/personnalisation exteriore/etrier-bleu.jpg',
        price: 384,
      },
      3: {
        id: 14,
        name: 'Logo Alpine ailes avant',
        photo:
          'images/configurateur/equipements/categories/personnalisation exteriore/logo-alpine.jpg',
        price: 120,
      },
    },
    perso_interior: {
      1: {
        id: 15,
        name: 'Harmonie carbone mat',
        photo:
          'images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg',
        price: 0,
      },
      2: {
        id: 16,
        name: 'Pédalier en aluminium',
        photo:
          'images/configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg',
        price: 120,
      },
      3: {
        id: 17,
        name: 'Logo volant Bleu Alpine',
        photo:
          'images/configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg',
        price: 84,
      },
      4: {
        id: 18,
        name: 'Sièges chauffants',
        photo:
          'images/configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg',
        price: 400,
      },
    },
  },
  accessories: {
    transport_and_protection: {
      1: {
        id: 1,
        name: 'Extincteur 1kg',
        photo:
          'images/configurateur/accessories/transport et protection/extincteur.jpg',
        price: 22,
      },
      2: {
        id: 2,
        name: 'Chaine Premium Grip',
        photo:
          'images/configurateur/accessories/transport et protection/chaaine-neige.jpg',
        price: 336,
      },
      3: {
        id: 3,
        name: 'Alpine Alarme',
        photo:
          'images/configurateur/accessories/transport et protection/alarme.jpg',
        price: 543,
      },
      4: {
        id: 4,
        name: 'Protection Prise OBD',
        photo:
          'images/configurateur/accessories/transport et protection/protection-obd.jpg',
        price: 99,
      },
      5: {
        id: 5,
        name: 'Kit de sécurité',
        photo:
          'images/configurateur/accessories/transport et protection/kit-security.jpg',
        price: 20,
      },
      6: {
        id: 6,
        name: 'Fixation extincteur',
        photo:
          'images/configurateur/accessories/transport et protection/fixation-extincteur.jpg',
        price: 72,
      },
    },

    multimedia: {
      1: {
        id: 7,
        name: 'Support caméra sport',
        photo: 'images/configurateur/accessories/multimedia/support-camera.jpg',
        price: 89,
      },
      2: {
        id: 8,
        name: 'Support smartphone magnétique',
        photo:
          'images/configurateur/accessories/multimedia/support-smartphone.jpg',
        price: 21,
      },
    },
    interior: {
      1: {
        id: 9,
        name: 'Tapis de coffre',
        photo: 'images/configurateur/accessories/interieur/tapis-coffre.jpg',
        price: 59,
      },
      2: {
        id: 10,
        name: 'Filet de rangement - Horizontal',
        photo: 'images/configurateur/accessories/interieur/filet-rangement.jpg',
        price: 59,
      },
    },

    materials_garage: {
      1: {
        id: 11,
        name: 'Chargeur batterie',
        photo: 'images/configurateur/accessories/garage/chargeur-batterie.jpg',
        price: 240,
      },
      2: {
        id: 12,
        name: 'Kit Outils Alpine',
        photo: 'images/configurateur/accessories/garage/kit-outils.jpg',
        price: 398,
      },
    },
    exterior: {
      1: {
        id: 13,
        name: 'Cabochons Alpine - Métalisés',
        photo: 'images/configurateur/accessories/exterior/antivol-rims.jpg',
        price: 24,
      },
      2: {
        id: 14,
        name: 'Housse de protection Alpine',
        photo: 'images/configurateur/accessories/exterior/housse.jpg',
        price: 216,
      },
      3: {
        id: 15,
        name: 'Antivols pour jante - Noirs',
        photo: 'images/configurateur/accessories/exterior/cabochons-metal.jpg',
        price: 51,
      },
    },
  },

  photos: {
    //pour la pure
    1: {
      name: 'A110 Pure',
      color: 'blanc glacier',
      jante: 'standard',
      photosList: {
        1: 'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg',
        2: 'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg',
        3: 'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg',
        4: 'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg',
      },
    },

    2: {
      name: 'A110 Pure',
      color: 'Teinte spéciale Bleu Alpine',
      jante: 'standard',
      photosList: {
        1: 'images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg',
        2: 'images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (2).jpg',
        3: 'images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (3).jpg',
        4: 'images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (4).jpg',
      },
    },

    3: {
      name: 'A110 Pure',
      color: 'Teinte métallisée Noir Profond',
      jante: 'standard',
      photosList: {
        1: 'images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg',
        2: 'images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (2).jpg',
        3: 'images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (3).jpg',
        4: 'images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (4).jpg',
      },
    },
    4: {
      name: 'A110 Pure',
      color: 'blanc glacier',
      jante: 'serac',
      photosList: {
        1: 'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg',
        2: 'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg',
        3: 'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg',
        4: 'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg',
      },
    },
    5: {
      name: 'A110 Pure',
      color: 'Teinte spéciale Bleu Alpine',
      jante: 'serac',
      photosList: {
        1: 'images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg',
        2: 'images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg',
        3: 'images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg',
        4: 'images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg',
      },
    },
    6: {
      name: 'A110 Pure',
      color: 'Teinte métallisée Noir Profond',
      jante: 'serac',
      photosList: {
        1: 'images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg',
        2: 'images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg',
        3: 'images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg',
        4: 'images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg',
      },
    },
    7: {
      name: 'A110 Legend',
      color: 'blanc glacier',
      jante: 'legend',
      photosList: {
        1: 'images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg',
        2: 'images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg',
        3: 'images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg',
        4: 'images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg',
      },
    },
    8: {
      name: 'A110 Legend',
      color: 'Teinte spéciale Bleu Alpine',
      jante: 'legend',
      photosList: {
        1: 'images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg',
        2: 'images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg',
        3: 'images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg',
        4: 'images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg',
      },
    },

    9: {
      name: 'A110 Legend',
      color: 'Teinte métallisée Noir Profond',
      jante: 'legend',
      photosList: {
        1: 'images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg',
        2: 'images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg',
        3: 'images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg',
        4: 'images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg',
      },
    },
  },
};
export default DATA;
