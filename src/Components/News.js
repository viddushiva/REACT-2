import React, { Component } from "react";

class News extends Component {
  render() {
    return (
      <div className="div2">
        Name: {this.props.name} | Department: {this.props.department} | Rating:
        {this.props.rating}
      </div>
    );
  }
}

export default News;