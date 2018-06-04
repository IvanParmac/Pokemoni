import React, { Component } from 'react';
import { Dropdown, Menu } from 'antd';
import PropTypes from 'prop-types';
import {
  Route,
  NavLink,
  BrowserRouter,
} from 'react-router-dom';
import Home from '../Home/index';
import Favourites from '../Favourites/index';
import Details from '../Details/index';

const { Item } = Menu;

export default class extends Component {
  static propTypes = {
    sortBy: PropTypes.func,
  }

  renderMenu = () => (<Menu onClick={sort => this.props.sortBy(sort.key)}>
    <Item key="HP" > HP </Item>
    <Item key="NAME" > NAME </Item>
  </Menu>);

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul className="header">
            <li><NavLink className="headerLink" to="/"> HOME </NavLink> </li>
            <li><NavLink className="headerLink" to="/Favourites">FAVOURITES</NavLink></li>
            <li><Dropdown trigger={['click']} overlay={this.renderMenu()}><span className="headerLink">SORT BY </span></Dropdown></li>
          </ul>
          <div className="content">
            <Route
              exact
              path="/"
              render={props => <Home
                {...props}
              />}
            />
            <Route
              path="/Details/:id"
              component={Details}
            />
            <Route
              path="/Favourites"
              render={props =>
                <Favourites
                  {...props}
                />}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
