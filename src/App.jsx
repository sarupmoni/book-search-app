import { Component } from "react";
import "./App.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newValue = event.target.value;
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  }

  handleSubmit(event) {
    if (event.key === "Enter" && this.state.value) {
      this.props.addItem(this.state.value);
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        placeholder="search..."
      />
    );
  }
}

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
    this.addItem = this.addItem.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  addItem(value) {
    const regex = new RegExp(value, "i");
    this.setState(({ books }) => {
      const filteredBooks = books.filter((book) => {
        const searchItem = book.title.toLowerCase();

        return regex.test(searchItem);
      });

      const searchBooks = [...filteredBooks];

      return { books, searchBooks };
    });
  }

  onChange(value) {
    const regex = new RegExp(value, "i");
    this.setState(({ books }) => {
      const filteredBooks = books.filter((book) => {
        const searchItem = book.title.toLowerCase();

        return regex.test(searchItem);
      });

      const searchBooks = value === "" ? books : [...filteredBooks];

      return { books, searchBooks };
    });
  }

  render() {
    return (
      <>
        <div className="search-box">
          <Input addItem={this.addItem} onChange={this.onChange} />
        </div>
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
