import { createContext, useState } from "react";

import CART_ITEMS from "../shop-data.json";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = {isCartOpen, setIsCartOpen};
  return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};
