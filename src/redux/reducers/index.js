import { ADD_COMMENT, DELETE_COMMENT } from "../actions/action-types";

const initialState = {
  comments: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_COMMENT) {
    return Object.assign({}, state, {
      comments: state.comments.concat(action.payload)
    });
  }
  if (action.type === DELETE_COMMENT) {
    // copy for immutable
    const splicedComments =  state.comments.slice();
    splicedComments.splice(action.payload, 1);
    return Object.assign({}, state, {
      comments: splicedComments
    });
  }
  return state;
};

export default rootReducer;