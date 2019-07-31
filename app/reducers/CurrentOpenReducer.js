import { generate } from 'shortid';
import { ADD_SCREEN, REMOVE_SCREEN } from '../actions/CurrentOpenActions';

export default function currOpenScreens(state = [], action) {
  switch (action.type) {
    case ADD_SCREEN: {
      const newID = generate();
      const newScreen = {
        screen: action.screen,
        id: newID
      };
      return [...state, newScreen];
    }
    case REMOVE_SCREEN: {
      const newState = state.filter(screen => screen.id !== action.id);
      return newState;
    }
    default:
      return state;
  }
}
