import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import authSlice from "./reducers/authSlice";
import adminDealersSlice from "./reducers/adminReducers/adminDealersSlice";
import NewOrderRequestSlice from "./reducers/adminReducers/newOrderRequestSlice";
import AllProductsSlice from "./reducers/adminReducers/allProductsSlice";
import AllLists from "./reducers/adminReducers/listsSlice";

// import { APP_MODE } from "../env";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth_store", "common_store"],
};

const reducers = combineReducers({
  auth_store: authSlice,
  admin_dealers: adminDealersSlice,
  bd_person_store: NewOrderRequestSlice,
  all_product: AllProductsSlice,
  all_lists: AllLists,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  // devTools: APP_MODE === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
