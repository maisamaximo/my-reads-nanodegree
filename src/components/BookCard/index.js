import './styles.css'

export function BookCard({book}) {

    const mapImage = (book) => {
    
        if (book.imageLinks && book.imageLinks.thumbnail) {
          return `url(${book.imageLinks.thumbnail})`;
          
        } else {
          return "none";
        }
      }

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
            <select>
            <option value="none" disabled>
                Move to...
            </option>
            <option value="currentlyReading">
                Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
        </div>
        </div>
        <div className="book-title">1776</div>
        <div className="book-authors">David McCullough</div>
    </div>
    )
}