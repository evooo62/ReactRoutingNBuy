import {
  CartService
} from "../../services/cart.service";

const CartState = {
  cartItems: [],
  total: 0,
};

export const CartReducer = (state = CartState, action) => {
 
  switch (action.type) {
    case "AddToCart":
      console.log("add");
      const cartObject1 = CartService.AddToCart(
        action.payload,
        state.cartItems
      );

      return {
        ...state,
        cartItems: cartObject1.cartItems,
        total: cartObject1.total,
      };
    case "RemoveFromCart":
      console.log("remove");
      const cartObject2 = CartService.RemoveFromCart(
        action.payload.id,
        state.cartItems
      );

      console.log("RemoveFromCart", cartObject2);

      return {
        ...state,
        cartItems: cartObject2.cartItems,
        total: cartObject2.total,
      };
    case "ClearItems":
      return {
        ...state,
        cartItems: [],
        total: 0,
      };
    case "DecreaseQuantity":
      const cartObject3 = CartService.DecreaseQuantity(
        action.payload,
        state.cartItems
      );
      return {
        ...state,
        cartItems: cartObject3.cartItems,
        total: cartObject3.total,
      };
    case "IncreaseQuantity":
      const cartObject4 = CartService.IncreaseQuantity(
        action.payload,
        state.cartItems
      );
      return {
        ...state,
        cartItems: cartObject4.cartItems,
        total: cartObject4.total,
      };

    default:
      return state;
  }
};