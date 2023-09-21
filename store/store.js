import { configureStore } from "@reduxjs/toolkit";
import eventData from "./eventData";

const store = configureStore({
  reducer: { eventData },
});

export default store;
