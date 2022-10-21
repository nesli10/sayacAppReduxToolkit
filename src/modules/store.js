import { configureStore } from "@reduxjs/toolkit";
import  counterSlice from "../redux/counter.Slices";

export default configureStore({
  reducer:{
    counter:counterSlice,
  },

});