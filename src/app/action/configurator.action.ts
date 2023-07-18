import { createAction, props } from '@ngrx/store';
import ICar from '../model/car.model';
import IColor from '../model/color.model';

export const selectCar = createAction('[Configurator] selectCar', props<{ car: ICar }>());
export const selectColor = createAction('[Configurator] selectColor', props<{ color: IColor }>());
export const afterSelection = createAction('[Configurator] afterSelection');