import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

type CounterSliceState = { value: number };
type State = number;
const incrementByAmount: CaseReducer<State, PayloadAction<number>> = (
  state,
  action
) => (state += action.payload);

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 } as CounterSliceState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount
  }
});
