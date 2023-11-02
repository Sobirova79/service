import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "../rootConfig";
// import { MainPermissions } from "src/utils/types";

interface State {
  todos: {
    id: number;
    name: string;
    count: number;
    price: number;
    status: boolean;
  }[];

  // permissions?: { [key in MainPermissions]: boolean };
}

const initialState: State = {
  todos: [],
  // permissions: undefined,
};

export const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoHandler: (
      state,
      action: PayloadAction<{
        name: string;
        count: number;
        price: number;
        status: boolean;
      }>
    ) => {
      const todoItem = {
        name: action?.payload.name,
        count: action.payload.count,
        price: action.payload.price,
        status: action.payload.status,
        id: new Date().getMilliseconds(),
      };
      // console.log(todoItem, "todoItem");
      state.todos.push(todoItem);
    },
    removeHandler: (state, action: PayloadAction<number>) => {
      const filtered = state.todos.filter((_, idx) => {
        return idx !== action.payload;
      });
      state.todos = filtered;
    },
    updateHandler: (
      state,
      action: PayloadAction<{
        index: number;
        name: string;
        count: number;
        price: number;
        status: boolean;
      }>
    ) => {
      const { payload } = action;
      console.log(payload, "payload");
      console.log(state.todos[payload.index], "state.todos[payload.index].");
      if (
        state.todos[payload.index]?.name &&
        state.todos[payload.index]?.count &&
        state.todos[payload.index]?.price &&
        state.todos[payload.index]?.status
      ) {
        state.todos[payload.index].name = payload.name;
        state.todos[payload.index].count = payload.count;
        state.todos[payload.index].price = payload.price;
        state.todos[payload.index].status = payload.status;
      }
    },
  },
});

export const todoSelector = (state: RootState) => state.todo.todos;

export const { todoHandler, removeHandler, updateHandler } =
  todoReducer.actions;

export default todoReducer.reducer;
