import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Glyphicon } from 'react-bootstrap';

export default class extends Component {
  static displayName = 'Favourites'

  static propTypes = {
    favourites: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
    removeFromFavourites: PropTypes.func,
  }

  state = {}

  render() {
    return (
      <div>
        {
          this.props.favourites.map((favourite, index) => (
            <div className="blockClass" key={index}>
              <img key={index} src={favourite.imageUrl} alt={favourite.name} />
              <Button onClick={() => this.props.removeFromFavourites(favourite.id)} >
                <Glyphicon glyph="remove" />
              </Button>
            </div>
          ))
        }

      </div >
    );
  }
}
