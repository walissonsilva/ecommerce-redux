import { Product } from "../../data/products";
import { Cart } from "../../types/Cart";

interface CartState {
  cart: Cart;
}

const initialState: CartState = {
  cart: [],
};

export interface CartAction {
  type: string;
  payload: Product;
}

export function cartReducer(
  state = initialState,
  action: CartAction
): CartState {
  switch (action.type) {
    case "cart/add-product":
      return {
        ...state,
        cart: [...(state.cart ?? []), action.payload],
      };
    case "cart/remove-product":
      const products = state.cart.filter(
        (product) => product.id !== action.payload.id
      );

      return {
        ...state,
        cart: products,
      };
  }

  return state;
}
