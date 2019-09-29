import { FETCHING_CARDS_START, FETCHING_CARDS_SUCCESS } from "../actions";

const initialState = {
  cards: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CARDS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
