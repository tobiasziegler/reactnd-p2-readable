import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from '../actions';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class CategoryList extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllCategories());
  };

  render() {
    const { categories } = this.props;

    return (
      <Menu vertical>
        <Menu.Header>Categories</Menu.Header>
        <Menu.Item as={Link} to="/">
          all categories
        </Menu.Item>
        {categories &&
          categories.length > 0 &&
          categories.map(category => (
            <Menu.Item key={category.path} as={Link} to={`/${category.path}`}>
              {category.name}
            </Menu.Item>
          ))}
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories };
};

export default connect(mapStateToProps)(CategoryList);
