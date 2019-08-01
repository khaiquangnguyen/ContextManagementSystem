import { generate } from 'shortid';
import {
  ADD_TEXT_MEMO,
  ADD_VOICE_MEMO,
  REMOVE_MEMO,
  EDIT_MEMO
} from '../actions/MemoActions';

export default function memos(state = [], action) {
  switch (action.type) {
    case ADD_TEXT_MEMO: {
      const newID = generate();
      const newMemo = {
        text: action.text,
        voice: null,
        selected: false,
        id: newID,
        date: new Date()
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
        id: newID,
        date: new Date()
      };
      const newState = [...state, newMemo];
      return newState;
    }
    case REMOVE_MEMO: {
      const newState = state.filter(memo => memo.id !== action.id);
      return newState;
    }
    case EDIT_MEMO: {
      const newState = [...state];
      for (let i = 0; i < newState.length; i += 1) {
        if (newState[i].id === action.id) {
          newState[i].text = action.text;
          break;
        }
      }
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
}
