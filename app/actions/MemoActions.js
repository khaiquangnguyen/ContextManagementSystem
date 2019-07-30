export const ADD_TEXT_MEMO = 'ADD_TEXT_MEMO';
export const ADD_VOICE_MEMO = 'ADD_VOICE_MEMO';
export const REMOVE_MEMO = 'REMOVE_MEMO';

export function addVoiceMemo(recording) {
  return {
    type: ADD_VOICE_MEMO,
    recording
  }
}

export function addTextMemo(text) {
  return {
    type: ADD_TEXT_MEMO,
    text
  }
}

export function removeMemo(id) {
  return {
    type: REMOVE_MEMO,
    id
  }
}
