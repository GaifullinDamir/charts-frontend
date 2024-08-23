/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit/react";
import { IMoneyTurnover } from "../../../models/IMoneyTurnover";
import { fetchAllMoneyTurnoverPaginated } from "../../../http/moneyTurnoverApi";


interface IMoneyTurnoverState {
    moneyTurnoverArray: IMoneyTurnover[];
    moneyTurnoverArrayIsLoading: boolean;
    moneyTurnoverArrayError: string;
}


const initialState: IMoneyTurnoverState = {
    moneyTurnoverArray: [],
    moneyTurnoverArrayIsLoading: false,
    moneyTurnoverArrayError: ''
}

export const moneyTurnoverSlice = createSlice({
    name: 'moneyTurnover',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllMoneyTurnoverPaginated.fulfilled, (state: IMoneyTurnoverState, action) => {
                state.moneyTurnoverArrayIsLoading = false,
                state.moneyTurnoverArrayError = '',
                state.moneyTurnoverArray = action.payload
            })
            .addCase(fetchAllMoneyTurnoverPaginated.pending, (state: IMoneyTurnoverState) => {
                state.moneyTurnoverArrayIsLoading = true,
                state.moneyTurnoverArrayError = ''
            })
            .addCase(fetchAllMoneyTurnoverPaginated.rejected, (state: IMoneyTurnoverState, action) => {
                state.moneyTurnoverArrayIsLoading = false;
                state.moneyTurnoverArrayError = action.payload as string
            })
            .addDefaultCase(() => {});
    },
});

export default moneyTurnoverSlice.reducer;