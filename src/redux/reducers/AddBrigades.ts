import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootConfig";

interface State {
  Brigades: {
    name: string;
    brigadir: string;
    info: string;
    status: string;
  }[];
}

const initialState: State = {
  Brigades: [],
};

export const addReducer = createSlice({
  name: "AddBrigade",
  initialState,
  reducers: {
    AddHandler: (
      state,
      action: PayloadAction<{
        index: number;
        name: string;
        brigadir: string;
        info: string;
        status: string;
      }>
    ) => {
      const AppItem = {
        name: action?.payload?.name,
        id: new Date().getMilliseconds(),
        brigadir: action?.payload?.brigadir,
        info: action?.payload?.info,
        status: action?.payload?.status,
      };
      state.Brigades.push(AppItem);
    },
    updateHandler: (
      state,
      action: PayloadAction<{
        index: number;
        name: string;
        brigadir: string;
        info: string;
        status: string;
      }>
    ) => {
      const { payload } = action;
      if (
        state.Brigades[payload.index]?.name &&
        state.Brigades[payload.index]?.brigadir &&
        state.Brigades[payload.index]?.info &&
        state.Brigades[payload.index]?.status
      ) {
        state.Brigades[payload.index].name = payload.name;
        state.Brigades[payload.index].brigadir = payload.brigadir;
        state.Brigades[payload.index].info = payload.info;
        state.Brigades[payload.index].status = payload.status;
      }
    },
  },
});
export const addSelector = (state: RootState) => state.AddBrigades.Brigades;
export const { updateHandler, AddHandler } = addReducer.actions;

export default addReducer.reducer;
