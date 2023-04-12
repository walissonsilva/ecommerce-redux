import { Product } from "../../types/Product";

interface CartState {
  cart: Product[];
}

type CartAction = {
  type: string;
  payload?: Product;
};

const initialState: CartState = {
  cart: [],
};

export function cartReducer(
  state = initialState,
  action: CartAction
): CartState {
  switch (action.type) {
    case "cart/add-product":
      return { cart: [...state.cart, action.payload as Product] };
    case "cart/remove-product":
      return {
        cart: state.cart.filter((product) => product.id !== action.payload?.id),
      };
    case "cart/clear":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}
