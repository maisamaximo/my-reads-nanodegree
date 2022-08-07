import { BookCard } from "../BookCard/";

export function BookShelf({shelf, books}) {



    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {books.map(book => (
              <BookCard
                book={book}
                shelf={shelf}
                key={book.id}
              />
            ))}
            </ol>
          </div>
        </div>
      )
  }