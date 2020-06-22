//action creators go here
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = newFeature => {
    console.log('addFeature action creator');
    return {type: ADD_FEATURE, payload: newFeature}
};

export const removeFeature = featureToRemove => {
    return {type: REMOVE_FEATURE, payload: featureToRemove}
};