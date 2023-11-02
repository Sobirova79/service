import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootConfig";

interface State {
  Categories: {
    name: string;
    group: string;
    status: string;
  }[];
}

const initialState: State = {
  Categories: [],
};

export const categoryReducer = createSlice({
  name: "addCategory",
  initialState,
  reducers: {
    categoryHandler: (
      state,
      action: PayloadAction<{
        index: number;
        name: string;
        group: string;
        status: string;
      }>
    ) => {
      const CategoriesItem = {
        name: action?.payload?.name,
        id: new Date().getMilliseconds(),
        group: action?.payload?.group,
        status: action?.payload?.status,
      };
      state.Categories.push(CategoriesItem);
    },
    updateHandler: (
      state,
      action: PayloadAction<{
        index: number;
        name: string;
        group: string;
        status: string;
      }>
    ) => {
      const { payload } = action;
      if (
        state.Categories[payload.index]?.name &&
        state.Categories[payload.index]?.group &&
        state.Categories[payload.index]?.status
      ) {
        state.Categories[payload.index].name = payload.name;
        state.Categories[payload.index].group = payload.group;
        state.Categories[payload.index].status = payload.status;
      }
    },
  },
});

export const categorySelector = (state: RootState) =>
  state.addCategories.Categories;
export const { updateHandler, categoryHandler } = categoryReducer.actions;

export default categoryReducer.reducer;
