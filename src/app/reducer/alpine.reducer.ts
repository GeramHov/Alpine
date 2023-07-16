import { createReducer, on } from '@ngrx/store';
import DATA from '../data/alpine';

export const initialState = {
  selectedCar: null,
  selectedColor: null,
  selectedEquipment: null,
  data: DATA,
};

const configuratorReducer = createReducer(initialState);

export function reducer(state: any, action: any) {
  return configuratorReducer(state, action);
}

// Selector function to get the configurator data
export const selectConfiguratorData = (state: any) => state.configurator.data;
