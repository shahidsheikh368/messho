

import React, { useState , useEffect} from 'react';
import { Data } from './ContextData';

export default function SendContext({ children }) {
  const [cartItems, setCartItems] = useState(()=>{

      const Saved = localStorage.getItem('cartitems')
    return Saved ? JSON.parse(Saved) : []  
  }) ;


  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    
  };


        const removeFromCart  = (id)=>{
             setCartItems((prev) => prev.filter((item) => item.id !== id));
        };

          useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Data.Provider value={{ cartItems, addToCart,removeFromCart  }}>
      {children}
    </Data.Provider>
  );
}
