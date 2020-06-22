//action creators go here
export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = newFeature => {
    console.log('addFeature action creator');
    return {type: ADD_FEATURE, payload: newFeature}
}