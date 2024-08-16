import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import liveReportsReducer from './liveReportsReducer';
import aboutReducer from './aboutReducer';
import coinsContainerReducer from './coinsContainerReducer';

const reducers = combineReducers({
  home: homeReducer,
  liveReports: liveReportsReducer,
  about: aboutReducer,
  coinsContainer: coinsContainerReducer,
});

export { homeReducer, liveReportsReducer, aboutReducer, coinsContainerReducer };
export default reducers;