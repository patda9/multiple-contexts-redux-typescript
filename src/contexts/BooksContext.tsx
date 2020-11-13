import React, { createContext, Dispatch, Reducer, useReducer } from "react";
import booksReducer from "../stores/books/books.reducer";

import { BooksActionType } from "../types/actions";
import { Book, BooksState } from "../types/states";

export const booksInitialState: BooksState = {
  books: [
    { title: "A Brief History of Time" } as Book
  ],
};

export interface IBooksContextProps {
  state: BooksState;
  dispatch: Dispatch<BooksActionType>;
}

export const BooksStore = createContext({} as IBooksContextProps);

export const BooksStoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<BooksState, BooksActionType>>(
    booksReducer,
    booksInitialState
  );

  const value = { state, dispatch };

  return <BooksStore.Provider value={value}>{children}</BooksStore.Provider>;
};
