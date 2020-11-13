import React, { useContext } from "react";

import { IThemeContextProps, ThemeStore } from "../../contexts/ThemeContext";
import { ThemeAction } from "../../types/actions";

function onClickHandler(context: IThemeContextProps) {
  const randomBase16String = [...Array(6)]
    .map(_ => Math.floor(Math.random() * 16)
    .toString(16)).join("");

  context.dispatch({ type: ThemeAction.CHANGE_THEME, payload: { theme: `#${randomBase16String}` } });
}

export const Theme: React.FC = () => {
  const themeContext = useContext(ThemeStore);

  return (
    <div style={{ background: themeContext.state.theme }}>
      <button onClick={() => {onClickHandler(themeContext)}}>Random Theme</button>
    </div>
  );
};
