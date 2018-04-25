import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class extends Component {
  static displayName = 'Home'
  static propTypes = {
    addToFavourites: PropTypes.func,
    removeFromFavourites: PropTypes.func,
    sort: PropTypes.string,
  }
  state = {
    cards: [],
  }


  componentWillMount() {
    axios.get(
      'https://api.pokemontcg.io/v1/cards?page=1&pageSize=10',
    ).then((response) => {
      if (response.data.cards && response.data.cards.length) {
        this.setState(
          { cards: response.data.cards },
        );
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const { cards } = this.state;

    if (nextProps.sort !== this.props.sort) {
      if (nextProps.sort === 'HP') {
        const newCards = cards.sort((card1, card2) => {
          if (card1.hp === 'None') return -1;
          if (card2.hp === 'None') return 1;
          return (parseInt(card1.hp, 10) > parseInt(card2.hp, 10));
        });
        this.setState({ cards: newCards });
      }
      if (nextProps.sort === 'NAME') {
        const newCards = cards.sort((card1, card2) =>
          (card1.name > card2.name),
        );
        this.setState({ cards: newCards });
      }
    }
  }

  renderCards = () => {
    const { cards } = this.state;

    return cards.map((card, index) => (
      <div className="homeCard" key={index}>
        <NavLink to={`/Details/${card.id}`}>
          <img src={card.imageUrl} alt={card.name} />
        </NavLink>
        <Button onClick={() => this.props.addToFavourites(card)}> <Glyphicon glyph="star" /></Button>
        <Button onClick={() => this.props.removeFromFavourites(card.id)}><Glyphicon glyph="remove" /></Button>
      </div>),
    );
  }

  render() {
    return (
      <div>
        {this.renderCards()}
      </div>
    );
  }
}
