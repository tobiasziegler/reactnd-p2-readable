import React, { Component } from 'react';

class CategoryView extends Component {
  render() {
    console.log(this.props.match.params);
    return (
      <p>
        This component will display the category view for the
        {' ' + this.props.match.params.category} category
      </p>
    );
  }
}

export default CategoryView;
