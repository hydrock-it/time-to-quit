import { actionsType } from '../constants';

export const setStartDataAC = (event) => {
  return {
    type: actionsType.SET_SMOKING_DATA,
    payload: {
      [event.target.name]: +event.target.value
    }
  }
}
