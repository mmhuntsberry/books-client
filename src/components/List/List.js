import React, { Component } from "react";
import Item from "../Item";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    fetch("https://booksdb.vercel.app/books")
      .then((response) => response.json())
      .then((data) => this.setState({ books: data }));
  }

  // componentDidUpdate() {
  //   console.log(this.state.books);
  // }

  render() {
    return (
      <ul>
        {this.state.books &&
          this.state.books.map((book) => {
            return (
              <Item
                title={book.title}
                author={book.author}
                cover={book.cover_art}
                publisher={book.publisher}
              />
            );
          })}
      </ul>
    );
  }
}

export default List;
