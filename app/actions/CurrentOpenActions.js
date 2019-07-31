export const ADD_SCREEN = 'ADD_SCREEN';
export const REMOVE_SCREEN = 'REMOVE_SCREEN';

export function addScreen(screen) {
  return {
    type: ADD_SCREEN,
    screen
  };
}
export function remove(id) {
  return {
    type: REMOVE_SCREEN,
    id
  };
}
