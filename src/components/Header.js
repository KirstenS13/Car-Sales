//import useReducer
import React, { useReducer } from 'react';

//import connect from react-redux
import { connect } from 'react-redux';

//import reducer and state
import { initialState, rootReducer } from '../reducers/index';

const Header = props => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  console.log('state from Header.js', state);

  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

//define what component needs from application store
const mapStateToProps = state => {
  console.log('state from mapStateToProps in Header.js', state);
  return {
    car: state.car
  }
}

//connect to store
export default connect(mapStateToProps, {})(Header);
