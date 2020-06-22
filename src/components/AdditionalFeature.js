import React, { useState, useReducer } from 'react';

//import initialState and rootReducer
import { initialState, rootReducer } from '../reducers/index';
import { connect } from 'react-redux';

//import addFeature from actions
import { addFeature } from '../actions/index';


const AdditionalFeature = props => {
  const [newFeature, setNewFeature] = useState({
    id: '',
    name: '',
    price: ''
  })
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const handleChanges = () => {
    console.log('props.feature in AdditionalFeature.js', props.feature);
    console.log("Add a feature has been clicked, I repeat I have been clicked");
    setNewFeature({
      id: props.feature.id,
      name: props.feature.name,
      price: props.feature.price
    });
  }

  const clickFeature = e => {
    e.preventDefault();
    handleChanges();
    props.addFeature(newFeature);
  }

  console.log('newFeature', newFeature);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={clickFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
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
    addFeature: newFeature => dispatch(addFeature(newFeature))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
