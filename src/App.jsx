import { Component } from "react";
import "./App.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = event.target.value;
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder="search..."
      />
    );
  }
}

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <>
        <select className="selector" onChange={this.handleSelect}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="year">Year</option>
        </select>
      </>
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
    const books = [
      { title: "Great Expectation", author: "Charles Dickens", year: "1860" },
      { title: "War and Peace", author: "Leo Tolstoy", year: "1869" },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald	",
        year: "1925",
      },
      { title: "To Kill a Mockingbird", author: "Harper Lee", year: "1960" },
      { title: "Pride and Prejudice", author: "Jane Austen", year: "1813" },
    ];
    this.state = {
      books,
      searchBooks: [...books],
      option: "title",
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onChange(value) {
    const regex = new RegExp(value, "i");
    this.setState(({ books, option }) => {
      const filteredBooks = books.filter((book) => {
        const searchItem = book[option].toLowerCase();

        return regex.test(searchItem);
      });

      const searchBooks = value === "" ? books : [...filteredBooks];

      return { books, searchBooks, option };
    });
  }

  onSelect(option) {
    this.setState((prev) => ({ ...prev, option }));
  }

  render() {
    return (
      <>
        <div className="search-box">
          <Input onChange={this.onChange} />
          <Select onChange={this.onSelect} />
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
