import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cards: {}
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      const {id} = action.payload;
      state.cards[id] = action.payload;
    }
  }
});

export const selectCards = (state) => state.cards.cards;
export default cardsSlice.reducer;
export const {addCard} = cardsSlice.actions;