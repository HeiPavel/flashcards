import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  topics: {}
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      const newTopic = {
        id: action.payload.id,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: []
      }
      state.topics[action.payload.id] = newTopic;
    },
    addQuizId: (state, action) => {
      const {quizId, topicId} = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
export const {addTopic, addQuizId} = topicsSlice.actions;