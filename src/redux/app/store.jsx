import { configureStore } from "@reduxjs/toolkit";
import taskreducer from "../features/tasksSlice";
const store = configureStore({
 reducer: {
  task: taskreducer,
 },
});
export default store