import axios from "axios";

export const FETCHING_CARDS_START = "FETCHING_CARDS_START";
export const FETCHING_CARDS_SUCCESS = "FETCHING_CARDS_SUCCESS";
export const FETCHING_CARDS_FAILURE = "FETCHING_CARDS_FAILURE";
export const getCards = () => {
  return dispatch => {
    dispatch({ type: FETCHING_CARDS_START });
    axios
      .get("https://api.pokemontcg.io/v1/cards")
      .then(res =>
        dispatch({ type: FETCHING_CARDS_SUCCESS, payload: res.data.cards })
      )
      .catch(err => {
        dispatch({
          type: FETCHING_CARDS_FAILURE,
          payload: err.response.message
        });
      });
  };
};
