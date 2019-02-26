import { ADD_COMMENT, DELETE_COMMENT } from "./action-types";

export const addComment = payload => {
  const date = new Date();
  return {
    type: ADD_COMMENT,
    payload: {
      text: payload,
      date: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    }
  };
}

export const deleteComment = index => {
  return {
    type: DELETE_COMMENT,
    payload: index
  }
}