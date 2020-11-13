import { themeInitialState } from "../../contexts/ThemeContext";
import { ThemeAction, ThemeActionType } from "../../types/actions";

export default (state = themeInitialState, { type, payload }: ThemeActionType) => {
  switch (type) {
    case ThemeAction.CHANGE_THEME: {
      console.log("CHANGE_THEME");

      return { theme: payload?.theme ?? state.theme };
    }
    default: {
      return state;
    }
  }
};
