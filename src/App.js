import React from 'react';
//import createStore
import { createStore } from 'redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

//import our reducer
import { rootReducer } from './reducers/index';
import { connect } from 'react-redux';

//create store
export const store = createStore(rootReducer);

console.log('store.getState() from outside of App function', store.getState());
console.log('store from app', store)

const App = () => {
  /* const state = {
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
  }; */

  return (
    <div className="boxes">
      <div className="box">
        <Header car={store.getState().car} />
        <AddedFeatures car={store.getState().car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={store.getState().additionalFeatures} />
        <Total car={store.getState().car} additionalPrice={store.getState().additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(App);
