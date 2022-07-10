import { createSlice } from "@reduxjs/toolkit";

// appApi
import appApi from "../services/appApi";

const initialState = [];

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});

export default userSlice.reducer;