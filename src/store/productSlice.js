import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import StatusCode from "../utils/StatusCode";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const result = await axios.get("https://fakestoreapi.com/products");
  console.log("result from Products API: ", result.data);
  return result.data;
});

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     try {
//       const result = await axios.get("https://fakestoreapi.com/products");
//       console.log("result from Products API: ", result.data);
//       dispatch(fetchProducts(result.data));
//     } catch (e) {
//       console.log("Error fetching Products: ", e);
//     }
//   };
// }
