import { Component } from "react";
import "./App.css";

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
        <td>{this.props.year}</td>
      </tr>
    );
  }
}

class BookCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { title: "Great Expectation", author: "Charles Dickens", year: 1860 },
        { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald	",
          year: 1925,
        },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
      ],
      searchBooks: [
        { title: "Great Expectation", author: "Charles Dickens", year: 1860 },
        { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald	",
          year: 1925,
        },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="table-container">
          <h1>Book Collection</h1>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {this.state.searchBooks.map((book, index) => (
                <Table
                  key={index}
                  title={book.title}
                  author={book.author}
                  year={book.year}
                />
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default BookCollection;
