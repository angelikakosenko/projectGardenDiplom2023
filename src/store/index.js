import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoriesSlice from "./slice/categoriesSlice";
import productsSlice from "./slice/productsSlice";
import basketSlice from "./slice/basketSlice";
import cuponSlice from "./slice/cuponSlice";
import orderSlice from "./slice/orderSlice";

const rootReducer = combineReducers({
  category: categoriesSlice,
  products: productsSlice,
  basket: basketSlice,
  cupon: cuponSlice,
  order: orderSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["category", "products"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
