import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class extends Component {
  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape()),
    fetchAllPokemons: PropTypes.func,
    toggleFavourites: PropTypes.func,
  }

  componentWillMount() {
    if (!this.props.cards || this.props.cards.length === 0) {
      this.props.fetchAllPokemons();
    }
  }

  renderCards = () =>
    this.props.cards.map((card, index) => (
      <div className="homeCard" key={index}>
        <NavLink to={`/Details/${card.id}`}>
          <img src={card.imageUrl} alt={card.name} />
        </NavLink>
        <Button onClick={() => this.props.toggleFavourites(card)}> {card.isFavourite ? <Icon type="star" /> : <Icon type="star-o" />}</Button>
      </div>),
    );
  render() {
    return (
      <div>
        {this.renderCards()}
      </div>
    );
  }
}
