import React, { useState, useReducer } from 'react';

//import initialState and rootReducer
import { initialState, rootReducer } from '../reducers/index';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  const [newFeature, setNewFeature] = useState({
    newFeature: ''
  })
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const handleChanges = e => {
    e.preventDefault();
    console.log('props.feature in AdditionalFeature.js', props.feature);
    console.log("Add a feature has been clicked, I repeat I have been clicked");
    setNewFeature({ newFeature: props.feature });
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleChanges}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}

export default connect(mapStateToProps, {})(AdditionalFeature);
