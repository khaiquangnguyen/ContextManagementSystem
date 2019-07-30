import {
  ADD_PROJECT,
  REMOVE_PROJECT,
  SELECT_PROJECT
} from '../actions/ProjectNamesActions';

export function projectList(state = {}, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return state;
    case REMOVE_PROJECT:
      return state;
    case SELECT_PROJECT:
      return state;
    default:
      return state;
  }
}
