import { BooksState, ThemeState } from "./states";

export enum BooksAction {
  ADD_BOOK = "ADD_BOOK"
}

export enum ThemeAction {
  CHANGE_THEME = "CHANGE_THEME"
}

export type BooksActionType = {
  type: BooksAction;
  payload?: BooksState;
};

export type ThemeActionType = {
  type: ThemeAction;
  payload?: ThemeState;
};