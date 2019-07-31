import { generate } from 'shortid';
import {
  ADD_PROJECT,
  REMOVE_PROJECT,
  SELECT_PROJECT
} from '../actions/ProjectNamesActions';

export default function projectList(state = [], action) {
  let newState = [];
  switch (action.type) {
    case ADD_PROJECT: {
      const newID = generate();
      const newProject = {
        name: action.name,
        id: newID,
        selected: true
      };
      newState = [...state, newProject];
      return newState;
    }
    case REMOVE_PROJECT: {
      newState = state.filter(project => project.id !== action.id);
      return newState;
    }
    case SELECT_PROJECT: {
      state.forEach(project => {
        const select = project.id === action.id;
        newState.push({
          name: project.name,
          id: project.id,
          selected: select
        });
      });
      return newState;
    }
    default:
      return state;
  }
}
