import React, { Component } from "react";

import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    const authorCards = this.props.authors.map((author,index) => ( 
    <AuthorCard key = {author.first_name + index} author={author} />
        ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row" >
            {authorCards}
            </div>
         

      </div>
    );
  }
}

export default AuthorList;
