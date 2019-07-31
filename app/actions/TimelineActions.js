export const SELECT_SESSION = 'SELECT_SESSION';
export const ADD_SESSION = 'ADD_SESSION';
export const REMOVE_SESSION = 'REMOVE_SESSION';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const STOP = 'STOP';
export const ADD_SCREENSHOT = 'ADD_SCREENSHOT';
export const REMOVE_SCREENSHOT = 'REMOVE_SCREENSHOT';
export const SELECT_SCREENSHOT = 'SELECT_SCREENSHOT';

export function selectSession(session) {
  return {
    type: SELECT_SESSION,
    session
  };
}

export function removeSession(session) {
  return {
    type: REMOVE_SESSION,
    session
  };
}

export function addSession(session) {
  return {
    type: ADD_SESSION,
    session
  };
}

export function play() {
  return {
    type: PLAY
  };
}

export function pause() {
  return {
    type: PAUSE
  };
}

export function stop() {
  return {
    type: STOP
  };
}

export function addScreenshot(screenshot) {
  return {
    type: ADD_SCREENSHOT,
    screenshot
  };
}

export function removeScreenshot(screenshot) {
  return {
    type: REMOVE_SCREENSHOT,
    screenshot
  };
}

export function selectScreenshot(screenshot) {
  return {
    type: SELECT_SCREENSHOT,
    screenshot
  };
}
