import {CARD_DATA, SET_AMOUNT} from '../constants';

import axios from 'react-native-axios';

const cardData = {
  id: 1,
  name: 'Mark Henry',
  balance: '3000',
  cardNumber: '564734112413',
  thru: '12/20',
  cvv: '546',
  year: '2020',
  spendAmount: '$345',
};

export function cardDataSucess(cardData) {
  return {
    type: CARD_DATA,
    payload: cardData,
  };
}

export function getCardInfo(params) {
  return dispatch => {
    /*  axios
      .get('http://http://localhost:3000/cardData/cardData')
      .then(function (response) {
        dispatch(cardDataSucess(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });*/
    dispatch(cardDataSucess(cardData));
  };
}

export function setLimitSucess(amount) {
  return {
    type: SET_AMOUNT,
    weeklyLimitAmount: amount,
  };
}

export function setLimit(amount) {
  return dispatch => {
    dispatch(setLimitSucess(amount));
  };
}
