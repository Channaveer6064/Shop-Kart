import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { Reducer } from "../Reducer/Reducer";
import { NavbarData } from "./Data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    ProductData: [],
    CategoryData: [],
    MenubarData: [],
    toggleMenubar: false,
    toggleCategory: "men's clothing",
  });
  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      dispatch({ type: "ALL_PRODUCTS", payload: res?.data });
      dispatch({ type: "ALL_CATEGORIES", payload: response?.data });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    dispatch({ type: "MENUBAR_DATA", payload: NavbarData });
  }, []);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);
export { DataProvider, useData };
