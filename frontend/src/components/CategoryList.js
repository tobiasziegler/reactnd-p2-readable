import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from '../actions';
import { NavLink } from 'react-router-dom';
import { Grid, Menu } from 'semantic-ui-react';

class CategoryList extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllCategories());
  };

  render() {
    const { categories } = this.props;

    return (
      <Grid.Column width={6}>
        <Menu vertical fluid>
          <Menu.Item header>Categories</Menu.Item>
          <Menu.Item as={NavLink} exact to="/">
            all categories
          </Menu.Item>
          {categories &&
            categories.length > 0 &&
            categories.map(category => (
              <Menu.Item
                key={category.path}
                as={NavLink}
                to={`/${category.path}`}
              >
                {category.name}
              </Menu.Item>
            ))}
        </Menu>
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories };
};

export default connect(mapStateToProps)(CategoryList);
