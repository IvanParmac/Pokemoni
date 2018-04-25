import React, { Component } from 'react';
import { Dropdown, Menu } from 'antd';
import {
  Route,
  NavLink,
  BrowserRouter,
} from 'react-router-dom';
import Home from './Home';
import Favourites from './Favourites';
import Details from './Details';

const { Item } = Menu;

export default class extends Component {
  static displayName = 'App'

  state = {
    favourites: [],
    sort: 'HP',
  }

  addToFavourites = (card) => {
    const { favourites } = this.state;
    const index1 = favourites.findIndex(favourite => (favourite.id === card.id));

    if (index1 === -1) {
      this.setState({ favourites: [...favourites, card] });
    }
  }

  removeFromFavourites = (cardid) => {
    const { favourites } = this.state;
    const index1 = favourites.findIndex(favourite => (favourite.id === cardid));

    if (index1 !== -1) {
      this.setState({ favourites: [...favourites.slice(0, index1), ...favourites.slice(index1 + 1)] });
    }
  }

  sortBy = sort => this.setState({ sort: sort.key })

  renderMenu = () => (<Menu onClick={this.sortBy}>
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
                addToFavourites={this.addToFavourites}
                removeFromFavourites={this.removeFromFavourites}
                sort={this.state.sort}
              />}
            />
            <Route
              path="/Details/:id"
              render={props => <Details
                {...props}
                addToFavourites={this.addToFavourites}
                removeFromFavourites={this.removeFromFavourites}
              />}
            />
            <Route
              path="/Favourites"
              render={props =>
                <Favourites
                  {...props}
                  favourites={this.state.favourites}
                  removeFromFavourites={this.removeFromFavourites}
                />}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
