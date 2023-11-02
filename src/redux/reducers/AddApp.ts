import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootConfig";
import dayjs from "dayjs";

interface State {
  Applications: {
    filial: string;
    id: number;
    system: string;
    client: string;
    problem: string;
    speed: string;
    brigades: string;
    status: boolean;
    changed: string;
    time: string;
  }[];
}

const initialState: State = {
  Applications: [],
};

export const appReducer = createSlice({
  name: "AppAdd",
  initialState,
  reducers: {
    appHandler: (
      state,
      action: PayloadAction<{
        index: number;
        filial: string;
        id: number;
        system: string;
        client: string;
        problem: string;
        speed: string;
        brigades: string;
        status: boolean;
        changed: string;
        time: string;
      }>
    ) => {
      const AppItem = {
        filial: action?.payload.filial,
        id: new Date().getMilliseconds(),
        time: dayjs(new Date()).format("DD.MM.YYYY HH:mm"),
        system: action?.payload.system,
        client: action?.payload.client,
        problem: action?.payload.problem,
        speed: action?.payload.speed,
        brigades: action?.payload.brigades,
        status: action?.payload.status,
        changed: action?.payload.changed,
      };
      state.Applications.push(AppItem);
    },
    updateHandler: (
      state,
      action: PayloadAction<{
        index: number;
        filial: string;
        id: number;
        system: string;
        client: string;
        problem: string;
        speed: string;
        brigades: string;
        status: boolean;
        changed: string;
        time: number;
      }>
    ) => {
      const { payload } = action;
      if (
        state.Applications[payload.index]?.filial &&
        state.Applications[payload.index]?.system &&
        state.Applications[payload.index]?.client &&
        state.Applications[payload.index]?.problem &&
        state.Applications[payload.index]?.speed &&
        state.Applications[payload.index]?.brigades &&
        state.Applications[payload.index]?.status &&
        state.Applications[payload.index]?.changed &&
        state.Applications[payload.index]?.time
      ) {
        state.Applications[payload.index].filial = payload.filial;
        state.Applications[payload.index].system = payload.system;
        state.Applications[payload.index].client = payload.client;
        state.Applications[payload.index].problem = payload.problem;
        state.Applications[payload.index].speed = payload.speed;
        state.Applications[payload.index].brigades = payload.brigades;
        state.Applications[payload.index].status = payload.status;
        state.Applications[payload.index].changed = payload.changed;
      }
    },
  },
});
export const appSelector = (state: RootState) => state.AddApp.Applications;
export const { updateHandler, appHandler } = appReducer.actions;

export default appReducer.reducer;
