import {combineReducers} from 'redux';

const initial = {
  ui: {}
};

const ui = (state=initial.ui) => {
  return {};
}

export default combineReducers({ui});