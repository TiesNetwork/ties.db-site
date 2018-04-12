import { combineReducers } from 'redux';

/** External reducers **/
import { routerReducer as router } from 'react-router-redux';

/** Reducers **/
import views from 'views/reducer';

export default combineReducers({ router, views })
