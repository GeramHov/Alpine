import { createReducer, on } from '@ngrx/store';
import DATA, { IData } from '../data/alpine';
import ICar from '../model/car.model';
import { afterSelection, selectAccessory, selectCar, selectColor, selectEquipment, selectInterior, selectRim} from '../action/configurator.action';

interface IState {
  selectedCar: ICar | undefined,
  data: IData
}
export const initialState: IState = {
  selectedCar: undefined,
  data: DATA,
};

export const reducer = createReducer(
  initialState,
  on(selectCar, (state, { car }) => {
    let newState = {
      ...state,
      selectedCar: car
    }
    // console.log('Select Car Action : ', newState);

    return newState
  }),

  on(selectColor, (state, { color }) => {
    if (!state.selectedCar) return state;
  
    const newExteriorPrice = color.price;
    const currentPrice = state.selectedCar.total_price.initial_price + state.selectedCar.total_price.rims + state.selectedCar.total_price.interior + state.selectedCar.total_price.equipments + state.selectedCar.total_price.accessories
    const newTotalPrice = currentPrice + newExteriorPrice
  
    const newState = {
      ...state,
      selectedCar: {
        ...state.selectedCar,
        initial_color: color,
        total_price: {
          ...state.selectedCar.total_price,
          exterior: newExteriorPrice,
          total: newTotalPrice,
        }
      }
    }
    // console.log('Select Color Action : ', newState);
    return newState;
  }),

  on(selectRim, (state, { rim }) => {
    if (!state.selectedCar) return state;

    const newRimsPrice = rim.price;
    const currentPrice = state.selectedCar.total_price.initial_price + state.selectedCar.total_price.exterior + state.selectedCar.total_price.interior + state.selectedCar.total_price.equipments + state.selectedCar.total_price.accessories
    const newTotalPrice = currentPrice + newRimsPrice;

    let newState = {
      ...state,
      selectedCar: {
        ...state.selectedCar,
        initial_rim: rim,
        
        total_price: {
          ...state.selectedCar.total_price,
          rims: newRimsPrice,
          total: newTotalPrice,
        }
      }
    }
    console.log('Select Rim Action : ', newState);
    return newState;

  }),

  on(selectInterior, (state, { interior }) => {
    if (!state.selectedCar) return state;

    const newInteriorPrice = interior.price
    const currentPrice = state.selectedCar.total_price.initial_price + state.selectedCar.total_price.exterior + state.selectedCar.total_price.rims + state.selectedCar.total_price.equipments + state.selectedCar.total_price.accessories
    const newTotalPrice = currentPrice + newInteriorPrice;
    
    let newState = {
      ...state,
      selectedCar: {
        ...state.selectedCar,
        initial_interior: interior,

        total_price: {
          ...state.selectedCar.total_price,
          interior: newInteriorPrice,
          total: newTotalPrice,
        },
      }
    }
    // console.log('Select Interior Action : ', newState);
    return newState;
  }),

  on(selectEquipment, (state, { key, equipment }) => {
    if (!state.selectedCar) return state;
    
    const updatedEquipments = {
      ...state.selectedCar.equipments,
      [key]: [...state.selectedCar.equipments[key], equipment],
    };
    
    const equipmentsSum = Object.values(updatedEquipments).flat().reduce((accumulator, currentEquipment) => accumulator + currentEquipment.price, 0);

    const updatedCar = {
      ...state.selectedCar,
      equipments: updatedEquipments,
      total_price: {
        ...state.selectedCar.total_price,
        equipments: equipmentsSum,
        total:
          state.selectedCar.total_price.initial_price +
          state.selectedCar.total_price.exterior +
          state.selectedCar.total_price.rims +
          equipmentsSum +
          state.selectedCar.total_price.accessories,
      }
    };

    const newState = {
      ...state,
      selectedCar: updatedCar,
    };

    // console.log('Select Equipment Action: ', newState);
    return newState;
  }),

  on(selectAccessory, (state, { key, accessory }) => {
    if (!state.selectedCar) return state;
  
    const updatedAccessories = {
      ...state.selectedCar.accessories,
      [key]: [...state.selectedCar.accessories[key], accessory],
    };

    const accessoriesSum = Object.values(updatedAccessories).flat().reduce((accumulator, currentAccessory) => accumulator + currentAccessory.price, 0);
  
    const updatedCar = {
      ...state.selectedCar,
      accessories: updatedAccessories,
      total_price: {
        ...state.selectedCar.total_price,
        accessories: accessoriesSum,
        total:
          state.selectedCar.total_price.initial_price +
          state.selectedCar.total_price.exterior +
          state.selectedCar.total_price.rims +
          state.selectedCar.total_price.equipments +
          accessoriesSum
      }
    };
  
    const newState = {
      ...state,
      selectedCar: updatedCar,
    };
  
    console.log('Select Accessory Action: ', newState);
    return newState;
  }),

  on(afterSelection, (state, { }) => {
    if (!state.selectedCar) return state;
    let newState = {
      ...state,
      selectedCar: {
        ...state.selectedCar,
        photos: state.data.photos.filter((photoItem) => {
          if (
            photoItem.name == state.selectedCar?.version.name
            && photoItem.color === state.selectedCar?.initial_color.name
            && photoItem.rim === state.selectedCar?.initial_rim.name
          ) {
            return photoItem
          }
        })[0].list
      }
    }
    // console.log('Select After Action : ', newState);
    return newState
  }),

);


// Selector function to get the configurator data
export const selectConfiguratorData = (state: any) => state.configurator.data;
