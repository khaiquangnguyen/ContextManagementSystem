import { generate } from 'shortid';
import {
  ADD_TEXT_MEMO,
  ADD_VOICE_MEMO,
  REMOVE_MEMO
} from '../actions/MemoActions';

export default function memos(state = [], action) {
  switch (action.type) {
    case ADD_TEXT_MEMO: {
      const newID = generate();
      const newMemo = {
        text: action.text,
        voice: null,
        selected: false,
        id: newID
      };
      const newState = [...state, newMemo];
      return newState;
    }
    case ADD_VOICE_MEMO: {
      const newID = generate();
      const newMemo = {
        text: null,
        voice: action.recording,
        selected: false,
        id: newID
      };
      const newState = [...state, newMemo];
      return newState;
    }
    case REMOVE_MEMO: {
      const newState = state.filter(memo => memo.id !== action.id);
      return newState;
    }
    default:
      return state;
  }
}
