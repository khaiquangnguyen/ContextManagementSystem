export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const SELECT_PROJECT = 'SELECT_PROJECT';

export function addProject(name) {
  return {
    type: ADD_PROJECT,
    name
  }
}

export function removeProject(name) {
  return {
    type: REMOVE_PROJECT,
    name
  }
}

export function selectProject(name) {
  return {
    type: SELECT_PROJECT,
    name
  }
}
