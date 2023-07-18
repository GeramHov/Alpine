import { Store, createReducer, on } from '@ngrx/store';
import DATA, { IData } from '../data/alpine';
import ICar from '../model/car.model';
import { afterSelection, selectCar, selectColor } from '../action/configurator.action';

interface IState {
  selectedCar : ICar | undefined,
  data : IData
}
export const initialState : IState = {
  selectedCar: undefined,
  data: DATA,
};

export const reducer = createReducer(
  initialState, 
  on(selectCar, (state, { car })=>{
    let newState = {
      ...state,
      selectedCar : car
    }
    console.log('Select Car Action : ', newState);
    
    return newState
  }),
  on(selectColor, (state, { color })=>{
    if (!state.selectedCar) return state; 

    let newState = {
      ...state,
      selectedCar : {
        ...state.selectedCar,
        initial_color : color,
      }
    }
    console.log('Select Color Action : ', newState);
    return newState
  }),
  
  on(afterSelection, (state, {})=>{
    if (!state.selectedCar) return state; 
    let newState = {
      ...state,
      selectedCar: {
        ...state.selectedCar,
        pictures : state.data.pictures.filter((photoItem)=>{
          if (
            photoItem.name == state.selectedCar?.version.name 
            && photoItem.color === state.selectedCar?.initial_color.name
            // && photoItem.jante === state.selectedCar?.initial_rim.name[]
            ) {
            return photoItem
          }
        })[0].picturesList
      }
    }
    console.log('Select Color Action : ', newState);
    return newState
  })
);


// Selector function to get the configurator data
export const selectConfiguratorData = (state: any) => state.configurator.data;
