//import useReducer
import React, { useEffect, useState, useReducer } from 'react';

//import connect from react-redux
import { connect } from 'react-redux';

//import reducer and state
import { initialState, rootReducer } from '../reducers/index';

//import addFeature from actions
import { addCost } from '../actions/index';

const Total = props => {
  //use useReducer
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const [newTotal, setNewTotal] = useState();

  console.log('state from Total.js', state);
  console.log('initialState from Total.js', initialState);

  useEffect(() => {
    setNewTotal(props.car.price + props.additionalPrice);
    props.addCost(newTotal);
  }, [])

  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price}</h4>
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
    addCost: newTotal => dispatch(addCost(newTotal))
  };
};

//connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Total);
