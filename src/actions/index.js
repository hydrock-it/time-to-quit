import { actionsType } from '../constants';

export const setStartDataAC = event => ({
  type: actionsType.SET_SMOKING_DATA,
  payload: {
    [event.target.name]: +event.target.value,
  },
});
