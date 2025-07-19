import { createSlice } from "@reduxjs/toolkit";

const premiumSlice = createSlice({
    name: "premium",
    initialState: {
        isPremiumUser: false
    },
    reducers: {
        setPremium(state, action) {
            state.isPremiumUser = action.payload;
        }
    }
});

export const {setPremium} = premiumSlice.actions;
export default premiumSlice.reducer;