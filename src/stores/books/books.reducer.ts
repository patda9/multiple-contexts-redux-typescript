import { booksInitialState } from "../../contexts/BooksContext";
import { BooksAction, BooksActionType } from "../../types/actions";

export default (state = booksInitialState, { type, payload }: BooksActionType) => {
  switch (type) {
    case BooksAction.ADD_BOOK: {
      console.log("ADD_BOOK");

      return {
        ...state,
        books: payload?.books ?? state.books,
      };
    }
    default: {
      return state;
    }
  }
};
