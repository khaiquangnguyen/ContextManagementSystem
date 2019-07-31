import {
  SELECT_SESSION,
  ADD_SESSION,
  REMOVE_SESSION,
  ADD_SCREENSHOT,
  REMOVE_SCREENSHOT,
  SELECT_SCREENSHOT,
  PLAY,
  PAUSE,
  STOP,
} from '../actions/TimelineActions';
export default function timeline(state = [], action) {
  switch (action.type) {
    case SELECT_SESSION:
      return state;
    case ADD_SESSION:
      return state;
    case REMOVE_SESSION:
      return state;
    case ADD_SCREENSHOT:
      return state;
    case REMOVE_SCREENSHOT:
      return state;
    case SELECT_SCREENSHOT:
      return state;
    case PLAY:
      return state;
    case PAUSE:
      return state;
    case STOP:
      return state;
    default:
      return state;
  }
}
