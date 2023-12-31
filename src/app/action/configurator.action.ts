import { createAction, props } from '@ngrx/store';
import ICar from '../model/car.model';
import IColor from '../model/color.model';
import IRim from '../model/rim.model';
import IInterior from '../model/interior.model';
import IEquipment from '../model/equipment.model';
import IAccessory from '../model/accessory.model.ts';

export const selectCar = createAction('[Configurator] selectCar', props<{ car: ICar }>());
export const selectColor = createAction('[Configurator] selectColor', props<{ color: IColor }>());
export const selectRim = createAction('[Configurator] selectRim', props<{ rim: IRim }>());
export const selectInterior = createAction('[Configurator] selectInterior', props<{ interior: IInterior }>());
export const selectEquipment = createAction('[Configurator] selectEquipment', props<{ key: string, equipment: IEquipment }>());
export const selectAccessory = createAction('[Configurator] selectAccessory', props<{ key: string, accessory: IAccessory }>());
export const afterSelection = createAction('[Configurator] afterSelection');
