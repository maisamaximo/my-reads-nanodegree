/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
import {BookCard} from '../BookCard/';

export function BookShelf({shelf, books, changeShelf, getAllBooks}) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <BookCard
              book={book}
              shelf={shelf}
              key={book.id}
              getAllBooks={getAllBooks}
              changeShelf={changeShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
