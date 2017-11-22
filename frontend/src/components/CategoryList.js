import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class CategoryList extends Component {
  render() {
    const { categories } = this.props;

    return (
      <Menu vertical>
        <Menu.Header>Categories</Menu.Header>
        {categories &&
          categories.length > 0 &&
          categories.map(category => (
            <Menu.Item key={category.path}>{category.name}</Menu.Item>
          ))}
      </Menu>
    );
  }
}

export default CategoryList;
