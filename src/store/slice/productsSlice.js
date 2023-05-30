import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await fetch("http://localhost:3333/products/all");
      if (!resp.ok) {
        throw new Error("Server error!");
      }
      const data = await resp.json();
      const modifyData = data.map((item) => ({
        ...item,
        globalPrice:
          item.discont_price === null ? item.price : item.discont_price,
        show: true,
        sale: item.discont_price !== null,
      }));
      return modifyData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const byPrice = ({ globalPrice }) => globalPrice;

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  reducers: {
    resetFilter(state) {
      state.list.push({ show: true });
    },
    filteredSales(state, { payload }) {
      state.list.filter((item) =>
        payload ? (item.show = item.sale) : (item.show = true)
      );
    },
    filterByPrice(state, { payload }) {
      state.list.filter(
        (item) =>
          (item.show =
            item.globalPrice <= payload.max && item.globalPrice >= payload.min)
      );
    },
    sort(state, { payload }) {
      state.list.sort((a, b) => {
        switch (payload) {
          case 1:
            return byPrice(a) - byPrice(b);
          case 2:
            return byPrice(b) - byPrice(a);
          default:
            return state.list;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.status = "resolve";
        state.list = payload;
      })
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.status = "rejected";
        state.error = payload;
      });
  },
});

export const { resetFilter, filteredSales, sort, filterByPrice } =
  productsSlice.actions;
export default productsSlice.reducer;
