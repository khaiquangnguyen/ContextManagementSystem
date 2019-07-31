export const SELECT_PLUGIN = 'SELECT_PLUGIN';
export const ADD_PLUGIN = 'ADD_PLUGIN';
export const REMOVE_PLUGIN = 'REMOVE_PLUGIN';

export function selectPlugin(plugin) {
  return {
    type: SELECT_PLUGIN,
    plugin
  };
}

export function addPlugin(plugin) {
  return {
    type: ADD_PLUGIN,
    plugin
  };
}

export function removePlugin(plugin) {
  return {
    type: REMOVE_PLUGIN,
    plugin
  };
}
