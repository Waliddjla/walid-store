import React, {createContext, useReducer} from "react";

import { CartReducer } from "./cartReducer";

export const CartContext = createContext();

const initialState = {carteItems: []};

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    const addProduct =  payload => {
        dispatch({type: 'ADD', payload});
        
    }
    const removeProduct =  payload => {
        dispatch({type: 'REMOVE', payload});
    }
    const increaseQuantity =  payload => {
        dispatch({type: 'INQITY', payload});
    }
    const decreaseQuantity =  payload => {
        dispatch({type: 'DECQITY', payload});
    }
    const clearBasket = () => {
        dispatch({type: 'CLEAR', payload: undefined});
    }

    const getItems = () => {
        return state.carteItems;
    }
 const contextValues = {
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearBasket,
        getItems,
        ...state
    }
   
   
   
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;