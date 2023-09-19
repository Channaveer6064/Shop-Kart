import React from "react";

export const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALL_PRODUCTS":
      return { ...state, ProductData: payload };
    case "ALL_CATEGORIES":
      return { ...state, CategoryData: payload };
    case "MENUBAR_DATA":
      return { ...state, MenubarData: payload };
    case "TOGGLE_MENUBAR":
      return { ...state, toggleMenubar: !state.toggleMenubar };
    case "TOGGLE_CATEGORY":
      console.log(payload);
      return { ...state, toggleCategory: payload };

    default:
      return state;
  }
};
