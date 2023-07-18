import IAccessoire from "./accessoire.model";
import IColor from "./color.model";
import IEquipment from "./equipment.model";
import IRim from "./rim.model";
import IVersion from "./version.model";
import { IFeatures } from "./features.model";
import ISellerie from "./sellerie.model";

export default interface ICar {
  version: IVersion
  initial_color: IColor
  initial_rim: IRim[];
  features: IFeatures

  scellerie: ISellerie;
  pictures: Array<string>;
  equipements: {
    [key: string]: IEquipment[]
  };

  accessoires: {
    [key: string]: IAccessoire[]
  };

}