//import useReducer
import React, { useReducer } from 'react';

//import connect from react-redux
import { connect } from 'react-redux';

//import reducer and state
import { initialState, rootReducer } from '../reducers/index';

//import addFeature from actions
import { addFeature } from '../actions/index';

const Total = props => {
  //use useReducer
  const [state, dispatch] = useReducer(rootReducer, initialState);

  console.log('state from Total.js', state);
  console.log('initialState from Total.js', initialState);

  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

//define what component needs from application store
const mapStateToProps = state => {
  console.log('state from mapStateToProps in Total.js', state)
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFeature: newFeature => dispatch(addFeature(newFeature))
  };
};

//connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Total);
