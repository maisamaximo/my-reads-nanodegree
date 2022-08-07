import "./App.css";
import { BookShelf } from "./components/BookShelf";
import { Header } from "./components/Header";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const response = await BooksAPI.getAll();
    setBooks(response);
  };

  useEffect(() => {
    getAllBooks();
    console.log("books", books);
  }, [books.length]);

  const shelves = [
    {
      id: "currentlyReading",
      name: "Currently Reading"
    },
    {
      id: "wantToRead",
      name: "Want To Read"
    },
    {
      id: "read",
      name: "Read"
    }
  ]

  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a href="#"
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            {shelves.map(shelf => (
                    <BookShelf
                      key={shelf.id}
                      shelf={shelf}
                      books={books.filter(shelvedBooks => {
                        return shelvedBooks.shelf === shelf.id;
                      })}
                    />
            ))}
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
