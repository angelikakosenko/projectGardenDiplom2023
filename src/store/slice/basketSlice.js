import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    list: [],
  },
  reducers: {
    add(state, { payload }) {
      const product = state.list.find(({ id }) => id === payload);
      if (product) {
        product.count++;
      } else {
        state.list.push({ id: payload, count: 1 });
      }
    },
    removeProduct(state, { payload }) {
      state.list = state.list.filter(({ id }) => id !== payload);
    },
    incrCount(state, { payload }) {
      let findProduct = state.list.find(({ id }) => id === payload);
      findProduct.count++;
      console.log(findProduct);
    },
    decrCount(state, { payload }) {
      let findProduct = state.list.find(({ id }) => id === payload);
      findProduct.count--;
      if (findProduct.count === 0) {
        state.list = state.list.filter(({ id }) => id !== payload);
      }
    },
    removeAll(state) {
      state.list = [];
    },
  },
});

export const { add, removeProduct, incrCount, decrCount, removeAll, cupon } =
  basketSlice.actions;
export default basketSlice.reducer;
