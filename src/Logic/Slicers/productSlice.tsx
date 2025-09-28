import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../Components/Data/data";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filterProducts:
      JSON.parse(sessionStorage.getItem("filteredData") || "null") || storeData,
    error: false,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filterProducts = filter;
        state.error = false;
        const savedState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", savedState);
      } catch (err) {
        console.error(err);
        state.error = true;
      }
    },
  },
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
