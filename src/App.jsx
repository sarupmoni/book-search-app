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
  render() {
    return (
      <>
        <h1>Hello</h1>
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
              <Table
                title={"Great Expectation"}
                author={"Charles Dickens"}
                year={1860}
              />
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default BookCollection;
