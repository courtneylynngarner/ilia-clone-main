import React, { createContext, useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      let cartCount = state.count + 1;
      return {
        ...state,
        count: cartCount,
      };
    }

    default:
      return state;
  }
};

export const lineItemContext = createContext(initialState);

export const LineItemStore = ({ children }) => {
  const [lineItemState, updateLineItem] = useReducer(reducer, initialState);

  return (
    <lineItemContext.Provider value={{ lineItemState, updateLineItem }}>
      {children}
    </lineItemContext.Provider>
  );
};
