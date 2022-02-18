import {CARD_DATA, SET_AMOUNT} from '../constants';

const initialState = {
  cardData: null,
  weeklyLimitAmount: null,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_DATA:
      return Object.assign({}, state, {
        cardData: action.payload,
      });
    case SET_AMOUNT:
      return Object.assign({}, state, {
        weeklyLimitAmount: action.weeklyLimitAmount,
      });

    default:
      return state;
  }
};
export default cardReducer;
