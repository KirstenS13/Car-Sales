//import useReducer
import React, { useReducer } from 'react';
import AdditionalFeature from './AdditionalFeature';

//import connect from react-redux
import { connect } from 'react-redux';

//import reducer and state
//import { initialState, rootReducer } from '../reducers/index';

//import addFeature from actions
import { addFeature } from '../actions/index';

const AdditionalFeatures = props => {
  //use useReducer
  //const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

//define what component needs from application store
/* const mapStateToProps = state => {
  console.log('state from mapStateToProps in AdditionalFeatures.js', state)
  return {
    additionalFeatures: state.additionalFeatures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFeature: newFeature => dispatch(addFeature(newFeature))
  };
}; */

export default AdditionalFeatures;
