import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';

const Favourites = ({ favourites, toggleFavourites }) =>
  (
    <div>
      {
        favourites.map((favourite, index) => (
          <div className="blockClass" key={index}>
            <img key={index} src={favourite.imageUrl} alt={favourite.name} />
            <Button onClick={() => toggleFavourites(favourite)} >
              <Icon type="close" />
            </Button>
          </div>
        ))
      }
    </div >
  );

Favourites.propTypes = {
  favourites: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
  toggleFavourites: PropTypes.func,
};

export default Favourites;
