import { createSlice } from "@reduxjs/toolkit";
import serviceData from "../../data/serviceData";

export const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    services: serviceData,
    specificItem: serviceData[0],
  },
  reducers: {
    specificService: (state, action) => {
      state.specificItem = state.services.find(service => service.id === action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { specificService } = serviceSlice.actions;

export default serviceSlice.reducer;