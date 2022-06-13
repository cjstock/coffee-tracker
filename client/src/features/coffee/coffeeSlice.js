import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoffee } from './coffeeAPI'

const initialState = {
    coffees : []
};

export const addCoffeeAsync = createAsyncThunk(
    'coffee/fetchCoffee',
    async (id) => {
        const response = await fetchCoffee(id);
        return response.data;
    }
);

export const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        addCoffee: (state, action) => {
            state.coffees.push(action.payload)
        },
        removeCoffee: (state, action) => {
            const indexToRemove = state.coffees.findIndex(coffee => coffee.id === action.payload.id);
            state.coffees.splice(indexToRemove, 1);
        }
    }
});

export const { addCoffee, removeCoffee } = coffeeSlice.actions;

export const selectCoffee = (state) => state.coffees;

export default coffeeSlice.reducer;