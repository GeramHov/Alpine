export interface IEquipment {
  id: number;
  name: string;
  photo: string;
  price: number;
}

export interface IColor {
  name: string;
  price: number;
  photo: string;
}

export interface IRim {
  name: string;
  photo: string;
  price: number;
}

export interface IInterior {
  name: string;
  photo: string;
  price: number;
}

export interface IPhotos extends Array<string> {
  [photoNumber: number]: string;
}

export interface IAccessories {
  transport_and_protection: any;
  multimedia: any;
  interior: any;
  exterior: any;
  materials_garage: any;
}

export interface ICar {
  id: number;
  name: string;
  price: number;
  photo: string;
  colors: IColor;
  rims: IRim;
  interior: IInterior;
  photos: IPhotos;
  equipements: {
    media: { [equipmentId: number]: IEquipment };
    confort: { [equipmentId: number]: IEquipment };
    drive: { [equipmentId: number]: IEquipment };
    security: { [equipmentId: number]: IEquipment };
    perso_exterior: { [equipmentId: number]: IEquipment };
    perso_interior: { [equipmentId: number]: IEquipment };
  };
  accessories: IAccessories;
}

export interface ICarList {
  [carId: number]: ICar;
}
