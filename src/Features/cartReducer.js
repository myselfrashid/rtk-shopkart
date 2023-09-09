import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  quantity: 0,
  reducers: {
    addToCart(state, action) {
      let existingItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItem >= 0) {
        state.cartItems[existingItem].cartQuantity += 1;
        toast.success("Product Quantity Increased", {
          style: { background: "#333", color: "#EAB308" },
          icon: "👏",
          position: "bottom-center",
        });
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
        toast.success("Added to Cart", {
          style: { background: "#333", color: "#EAB308" },
          icon: "👏",
          position: "bottom-center",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success("Product Quantity Decreased", {
          style: { background: "#333", color: "#EAB308" },
          icon: "😪",
          position: "bottom-center",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const newCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        toast.success("Removed!", {
          style: { background: "#333", color: "#EAB308" },
          icon: "🗑️",
          position: "bottom-center",
        });
        state.cartItems = newCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify("state.cartItems"));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const newCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
          toast.success("Removed!", {
            style: { background: "#333", color: "#EAB308" },
            icon: "🗑️",
            position: "bottom-center",
          });
          state.cartItems = newCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify("state.cartItems"));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
    clearCart(state){
      state.cartItems = [];
      toast.error("Cart cleared", {
        position:"bottom-center"
      })
    }
  },
});

export const { addToCart, decreaseFromCart, removeFromCart, getTotals, clearCart } =
  cartReducer.actions;
export default cartReducer.reducer;
