//import useReducer
import React, { useReducer } from 'react';

//import connect from react-redux
import { connect } from 'react-redux';

//import reducer and state
import { initialState, rootReducer } from '../reducers/index';

const Total = props => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(Total);
