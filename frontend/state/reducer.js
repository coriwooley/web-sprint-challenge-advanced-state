// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_COUNTERCLOCKWISE:
      {
        state === 5 ? (state = 0) : state + 1;
      }
      break;
    case MOVE_CLOCKWISE:
      {
        state === 0 ? (state = 5) : state - 1;
      }
      break;
    default:
      return state;
  }
  return state;
}

const initialQuizState = "";
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      if (action.payload) {
        return { ...action.payload };
      } else {
        return initialQuizState;
      }
    default:
      return state;
  }
}

const initialSelectedAnswerState = '';
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      return action.payload
    default:
      return state
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case SET_INFO_MESSAGE:
      return action.payload
    default:
      return state
  }
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  switch(action.type){
    case INPUT_CHANGE:
      return{
        ...state,
        ...action.payload
      }
    case RESET_FORM:
      return {...initialFormState}
    default:
      return state
  }
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
