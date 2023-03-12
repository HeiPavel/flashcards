import {createSlice} from '@reduxjs/toolkit';
import {addQuizId} from '../topics/topicsSlice.js';
const initialState = {
  quizzes: {}
}

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: initialState,
  reducers: {
    addQuiz: (state, action) => {
      const {id} = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
export const {addQuiz} = quizzesSlice.actions;

export const addQuizAndQuizIdToTopicId = (payload) => {
  const {id, topicId} = payload;
  const quizIdPayload = {quizId: id, topicId: topicId};
  return (dispatch) => {
    dispatch(addQuiz(payload));
    console.log('quizIdPayload: ', quizIdPayload);
    dispatch(addQuizId(quizIdPayload));
  }
}