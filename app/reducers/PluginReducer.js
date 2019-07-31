import {
  ADD_PLUGIN,
  REMOVE_PLUGIN,
  SELECT_PLUGIN
} from '../actions/PluginActions';

export default function plugins(state = {}, action) {
  switch (action.type) {
    case ADD_PLUGIN:
      return state;
    case REMOVE_PLUGIN:
      return state;
    case SELECT_PLUGIN:
      return state;
    default:
      return state;
  }
}
