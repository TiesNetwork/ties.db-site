import { combineReducers } from 'redux';

/** Views reducers **/
import { reducer as main } from './Main';

const viewsReducer = combineReducers({ main });

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return viewsReducer(state, action);
  }
};
