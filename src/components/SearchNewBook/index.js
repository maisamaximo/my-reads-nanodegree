import React, { useEffect, useState } from "react";
import { search } from "../../BooksAPI";
import { Link } from "react-router-dom";
import {BookCard} from "../BookCard";

export function SearchNewBook({ books, getAllBooks, shelf, changeShelf }) {
    const [query, setQuery] = useState("");
    const [foundBooks, setFoundBooks] = useState([]);
  
    useEffect(() => {
      if (query) {
        search(query)
          .then((searchedBooks) => {
            searchedBooks.map((book) => {
              // find searched book and set the shelf
              const currentBook = books.find((b) => b.id === book.id);
              if (currentBook) {
                book.shelf = currentBook.shelf;
              } else {
                book.shelf = "none";
              }
              return book;
            });
            setFoundBooks(searchedBooks);
          })
          .catch((error) => {
            setFoundBooks([]);
          });
      } else {
        setFoundBooks([]);
      }
    }, [query, foundBooks.length, books, setFoundBooks]);
  

    const handleInput = (event) => {
        const value = event.target.value;
        setQuery(value);
      };

  return (
    <div className="search-books">
          <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onInput={handleInput}
        />
      </div>
    </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {foundBooks.length === 0 && query !== "" ? (
            <p>"No books found"</p>
          ) : (
            <></>
          )}
          {foundBooks &&
            foundBooks.length > 0 &&
            foundBooks.map((book) => (
                <BookCard
                book={book}
                shelf={shelf}
                key={book.id}
                getAllBooks={getAllBooks}
                changeShelf={changeShelf}
              />            ))}
        </ol>
      </div>
    </div>   
    )
}