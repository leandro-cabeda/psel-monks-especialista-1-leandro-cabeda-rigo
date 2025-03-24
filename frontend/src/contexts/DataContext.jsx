import { createContext, useEffect, useState } from "react";
import { getCategories, getCards } from "../services/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
    getCards().then(setCards);
  }, []);

  return (
    <DataContext.Provider value={{ categories, cards }}>
      {children}
    </DataContext.Provider>
  );
};
