import { actionsType } from '../constants';

export const setStartData = (event) => {
  return {
    type: actionsType.SET_SMOKING_DATA,
    smokingData: {
      [event.target.name]: event.target.value
    }
  }
}
