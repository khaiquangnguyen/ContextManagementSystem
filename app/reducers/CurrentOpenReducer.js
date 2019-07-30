import {
  ADD_SCREEN,
  REMOVE_SCREEN
} from '../actions/CurrentOpenActions';

export function currOpenScreens(state = {}, action) {
  switch (action.type) {
    case ADD_SCREEN:
      return state;
    case REMOVE_SCREEN:
      return state;
    default:
      return state;
  }
}
