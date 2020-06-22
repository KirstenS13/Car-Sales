//create reducers here

import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

//initialize state with the state object from App.js
export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

//create reducer
export const rootReducer = (state = initialState, action) => {
    console.log('state from rootReducer', state)
    switch (action.type) {
      case ADD_FEATURE:
        console.log("add_feature from reducer")
        return {
          ...state,
          additionalPrice: action.payload.price,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload]
          }
        };
      case REMOVE_FEATURE:
        return {
          ...state,
          car: {
            ...state.car,
            features: state.car.features.filter(feature => feature !== action.payload)
          }
        };
      default:
        return state;
    }
}