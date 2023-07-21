import IAccessoire from "./accessory.model.ts";
import IColor from "./color.model";
import IEquipment from "./equipment.model";
import IRim from "./rim.model";
import IVersion from "./version.model";
import { IFeatures } from "./features.model";
import { ITotal } from "./total.price.model";
import IInterior from "./interior.model";

export default interface ICar {
  version: IVersion
  initial_color: IColor
  initial_rim: IRim;
  initial_interior: IInterior;
  features: IFeatures

  photos: Array<string>;
  equipments: {
    [key: string]: IEquipment[]
  };

  accessories: {
    [key: string]: IAccessoire[]
  };
  total_price: ITotal

}