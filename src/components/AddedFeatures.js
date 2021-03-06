//import useReducer
import React from 'react';

//import connect from react-redux
//import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

//import reducer and state
//import { initialState, rootReducer } from '../reducers/index';

//import removeFeature from actions
//import { removeFeature } from '../actions/index';

const AddedFeatures = props => {
  //useReducer
  //const [state, dispatch] = useReducer(rootReducer, initialState);

  //console.log('props in AddedFeatures.js', props );

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

//define what component needs from application store
/* const mapStateToProps = state => {
  console.log('state from mapStateToProps in AddedFeatures.js', state)
  return {
    car: state.car
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFeature: featureToRemove => dispatch(removeFeature(featureToRemove))
  };
}; */

//connect to store
export default AddedFeatures;
