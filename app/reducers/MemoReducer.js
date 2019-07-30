import {
  ADD_TEXT_MEMO,
  ADD_VOICE_MEMO,
  REMOVE_MEMO
} from '../actions/MemoActions';

export function memos(state = {}, action) {
  switch (action.type) {
    case ADD_TEXT_MEMO:
      return state;
    case ADD_VOICE_MEMO:
      return state;
    default:
      return state;
  }
}
