import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../../Logic/Slicers/sliderSlice";
import productReducer from '../../Logic/Slicers/productSlice'

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productReducer,
  },
});
