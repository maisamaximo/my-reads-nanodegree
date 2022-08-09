/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import * as BooksAPI from '../../BooksAPI';

export function BookCard({book, getAllBooks}) {
  const mapImage = (book) => {
    if (book.imageLinks && book.imageLinks.thumbnail) {
      return `url(${book.imageLinks.thumbnail})`;
    } else {
      return 'none';
    }
  };

  const selectShelf = (event) => {
    const value = event.target.value;
    BooksAPI.update(book, value).then(getAllBooks);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `${mapImage(book)}`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf} onChange={selectShelf}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors !== undefined &&
        book.authors &&
        book.authors.map((author) => (
          <div key={author} className="book-authors">
            {author}
          </div>
        ))}
    </div>
  );
}
