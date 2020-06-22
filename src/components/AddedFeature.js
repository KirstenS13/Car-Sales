import React, { useState, useReducer } from 'react';

//import initialState and rootReducer
import { initialState, rootReducer } from '../reducers/index';
import { connect } from 'react-redux';

//import addFeature from actions
import { removeFeature } from '../actions/index';

const AddedFeature = props => {
  const [featureToRemove, setFeatureToRemove] = useState({
    id: '',
    name: '',
    price: ''
  })

  const [state, dispatch] = useReducer(rootReducer, initialState);

  const handleChanges = () => {
    console.log('remove feature has been clicked');
    setFeatureToRemove({
      id: props.feature.id,
      name: props.feature.name,
      price: props.feature.price
    })
  }

  const clickFeature = e => {
    e.preventDefault();
    handleChanges();
    props.removeFeature(featureToRemove);
  }

  console.log('featureToRemove', featureToRemove);

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={clickFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFeature: featureToRemove => dispatch(removeFeature(featureToRemove))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
