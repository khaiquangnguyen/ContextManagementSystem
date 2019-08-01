export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const SELECT_PROJECT = 'SELECT_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export function addProject(name) {
  return {
    type: ADD_PROJECT,
    name
  };
}

export function removeProject(id) {
  return {
    type: REMOVE_PROJECT,
    id
  };
}

export function editProjectName(id) {
  return {
    type: REMOVE_PROJECT,
    id
  };
}

export function selectProject(id) {
  return {
    type: SELECT_PROJECT,
    id
  };
}
