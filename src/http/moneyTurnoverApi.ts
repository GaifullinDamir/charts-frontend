import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMoneyTurnover } from "../models";
import { $host } from ".";

type PaginationType = {
    page: number;
    size: number;
}
export const fetchAllMoneyTurnoverPaginated = createAsyncThunk(
    'moneyTurnover/fetchAll',
    async ({page, size}: PaginationType, thunkApi) => {
        try {
            const res = await $host.get<IMoneyTurnover[]>(`moneyTurnover?_sort=-date&_page=${page}&_per_page=${size}`);
            const moneyTurnoverArray = res.data;
            return moneyTurnoverArray;
        } catch (error) {
            return thunkApi.rejectWithValue((error as Error).message);
        }
    }
)