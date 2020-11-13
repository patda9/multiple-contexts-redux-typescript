import React, { useContext, useState } from "react";

import { BooksStore, IBooksContextProps } from "../../contexts/BooksContext";
import { ThemeStore } from "../../contexts/ThemeContext";
import { BooksAction } from "../../types/actions";
import { Book } from "../../types/states";
import { Book as BookComponent } from "./book";

function onClickHandler(booksContext: IBooksContextProps, book: Book) {
  booksContext.dispatch({
    type: BooksAction.ADD_BOOK,
    payload: {books: [...booksContext.state.books, book]}
  })
}

export const Books: React.FC = () => {
  const booksContext = useContext(BooksStore);
  const themeContext = useContext(ThemeStore);

  const [bookTitle, setBookTitle] = useState("");

  return <div style={{background: themeContext.state.theme}}>
    <div>
      <input type="text" onChange={e => {setBookTitle(e.target.value)}} value={bookTitle} />
    </div>
    <div>
      <button onClick={() => {
        if (bookTitle) {
          onClickHandler(booksContext, {title: bookTitle} as Book);
        }
      }}>Add Book</button>
    </div>
    <div>{booksContext.state.books.map((b, i) => <BookComponent key={i} title={b.title} />)}</div>
  </div>;
};
