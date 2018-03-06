import {combineReducers} from 'redux';
import * as ControlsActions from './actions/ControlsActions'; 

const initial = {
  ui: {
    select: '',
    radio: '',
  }
};

const ui = (state=initial.ui, action) => {
  switch (action.type) {
    case ControlsActions.ON_CHANGE_SELECT:
      console.log("state", state, action);
      return {
        ...state,
        select: action.data
      };
    case ControlsActions.ON_CHANGE_RADIO:
      console.log("state", state, action);
      return {
        ...state,
        radio: action.data
      };
    default: 
      return state;
  }
}

export default combineReducers({ui});