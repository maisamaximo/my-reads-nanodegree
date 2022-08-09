/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import {BookShelf} from './components/BookShelf';
import {Header} from './components/Header';
import {Link} from 'react-router-dom';
import {SearchNewBook} from './components/SearchNewBook';

import * as BooksAPI from './BooksAPI';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// eslint-disable-next-line require-jsdoc
function App() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const response = await BooksAPI.getAll();
    setBooks(response);
  };

  const shelves = [
    {
      id: 'currentlyReading',
      name: 'Currently Reading',
    },
    {
      id: 'wantToRead',
      name: 'Want To Read',
    },
    {
      id: 'read',
      name: 'Read',
    },
  ];

  useEffect(() => {
    getAllBooks();
  }, [books.length]);

  const changeShelf = (bookToAdd, shelf) => {
    this.setState(() => {
      const nextState = books
          .filter((book) => book.id !== bookToAdd.id)
          .concat([{...bookToAdd, shelf}]);
      return setBooks(nextState);
    });
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="list-books">
                <Header />
                <div className="list-books-content">
                  {shelves.map((shelf) => (
                    <BookShelf
                      key={shelf.id}
                      shelf={shelf}
                      changeShelf={changeShelf}
                      getAllBooks={getAllBooks}
                      books={books.filter((shelvedBooks) => {
                        return shelvedBooks.shelf === shelf.id;
                      })}
                    />
                  ))}
                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            }
          />
          <Route
            path="/search"
            element={<SearchNewBook books={books} changeShelf={changeShelf} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
