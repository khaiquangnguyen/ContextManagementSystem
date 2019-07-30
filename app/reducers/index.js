// @flow
import {
  combineReducers
} from 'redux';
import {
  connectRouter
} from 'connected-react-router';
import memos from './MemoReducer';
import projectNames from './ProjectNamesReducer';
import timeline from './TimelineReducer';
import currOpenScreens from './CurrentOpenReducer';
import plugins from './PluginReducer';
import projectDB from './ProjectDBReducer';
export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    memos,
    projectNames,
    timeline,
    currOpenScreens,
    plugins,
    projectDB
  });
}
