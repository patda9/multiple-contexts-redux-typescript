import React, { createContext, Dispatch, Reducer, useReducer } from "react";
import themeReducer from "../stores/theme/theme.reducer";

import { ThemeActionType } from "../types/actions";
import { ThemeState } from "../types/states";

export const themeInitialState: ThemeState = {
  theme: "tomato",
};

export interface IThemeContextProps {
  state: ThemeState;
  dispatch: Dispatch<ThemeActionType>;
}

export const ThemeStore = createContext({} as IThemeContextProps);

export const ThemeStoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<ThemeState, ThemeActionType>>(
    themeReducer,
    themeInitialState
  );

  const value = { state, dispatch };

  return <ThemeStore.Provider value={value}>{children}</ThemeStore.Provider>;
};
