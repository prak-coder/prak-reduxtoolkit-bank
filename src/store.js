import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./account/accountSlice";
import customerReducer from "./customer/customerSlice";
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default store;
