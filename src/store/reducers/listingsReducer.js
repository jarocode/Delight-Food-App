import * as listingsTypes from "store/actions/listings";

export const initialState = [];

const ListingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case listingsTypes.ADD_LISTINGS:
      return action.data;

    default:
      return state;
  }
};

export default ListingsReducer;
