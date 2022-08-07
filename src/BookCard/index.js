import './styles.css'

export function BookCard({width, height, backgroundImage}) {

  return (
    <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: {width},
          height: {height},
          backgroundImage:
            `url(${backgroundImage})`,
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